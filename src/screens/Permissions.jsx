import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  LayoutAnimation,
  UIManager,
  Alert,
  AppState
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useIsFocused } from '@react-navigation/native';
import {
  LowerCurve,   
  UpperCurve,
  OneBancLogo,
  GreenTick,
  Cross,
  PermissionGraphic,
} from '../components/SvgIcons';
import { usePermissions } from '../utils/PersmissionContext';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const denialScreenMap = {
  phone: 'PhoneDenial',
  sms: 'SmsDenial',
  camera: 'CameraDenial',
  microphone: 'MicrophoneDenial',
  location: 'LocationDenial',
};

const platformPermissions = {
  phone: Platform.select({
    android: PERMISSIONS.ANDROID.READ_PHONE_STATE,
  }),
  sms: Platform.select({
    android: PERMISSIONS.ANDROID.READ_SMS,
  }),
  camera: Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  }),
  microphone: Platform.select({
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
  }),
  location: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }),
};

const Permissions = ({ navigation }) => {
  const { permissions, updatePermissionStatus } = usePermissions();
   const isFocused = useIsFocused();

    const handleGrantPermissions = async () => {
      if(!isFocused) return;
      if (AppState.currentState !== 'active') {
      Alert.alert(
        'App is not active',
        'Please bring the app to the foreground to grant permissions.',
      );
      return;
    }
    const permissionToRequest = [...permissions]
      .sort((a, b) => a.granted - b.granted)
      .find(p => !p.granted);

    if (!permissionToRequest) return;

    try {
      const result = await request(permissionToRequest.permission);
      if (result === RESULTS.GRANTED) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        updatePermissionStatus(permissionToRequest.id, true);
      } else {
        const screenName = denialScreenMap[permissionToRequest.id];
        if (screenName) {
          navigation.replace(screenName, { permissionId: permissionToRequest.id });
        } else {
          navigation.replace('PermissionDenied', { permissionId: permissionToRequest.id });
        }
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
      Alert.alert('Error', 'An error occurred while requesting permissions.');
    }
  };


  const allPermissionsGranted = permissions.every(p => p.granted);

  useEffect(() => {
    if (allPermissionsGranted && permissions.length > 0) {
      setTimeout(() => {
        navigation.push('ready');
      }, 1000);
    }
  }, [allPermissionsGranted, navigation, permissions.length]);

  const sortedPermissions = [...permissions].sort(
    (a, b) => a.granted - b.granted,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.curveContainer}>
        <LowerCurve />
      </View>
      <View style={styles.UpperCurve}>
        <UpperCurve height={200} width={250} />
      </View>
      <View style={styles.logo}>
        <OneBancLogo height={90} width={90} />
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Cross />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          We need a few permissions for a seamless account opening journey
        </Text>

        <View style={styles.permissionsList}>
          {sortedPermissions.map((item, index) => {
            const isActive = index === 0 && !item.granted;
            const iconSize = isActive ? 55 : 35;

            return (
              <View key={item.id} style={styles.permissionItem}>
                <View
                  style={[
                    styles.iconContainer,
                    isActive && styles.activeIconContainer,
                  ]}
                >
                  {item.granted ? (
                    <GreenTick />
                  ) : (
                    React.cloneElement(item.icon, {
                      width: iconSize,
                      height: iconSize,
                    })
                  )}
                  {index < sortedPermissions.length - 1 && (
                    <View
                      style={[
                        styles.dashedLine,
                        isActive
                          ? styles.activeDashedLine
                          : styles.defaultDashedLine,
                      ]}
                    />
                  )}
                </View>
                <Text
                  style={[
                    styles.permissionText,
                    isActive && styles.activePermissionText,
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <PermissionGraphic />
        <TouchableOpacity
          style={[
            styles.grantButton,
            allPermissionsGranted && styles.allGrantedButton,
          ]}
          onPress={handleGrantPermissions}
          disabled={allPermissionsGranted || !isFocused} 
        >
          <Text style={[styles.grantButtonText,!isFocused && { opacity: 0.5 },]}>
            {allPermissionsGranted ? 'Done!' : 'Grant Permission'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Permissions;

const PADDING_VERTICAL = 12;
const ICON_SIZE = 24;
const ICON_CONTAINER_WIDTH = 40;
const STANDARD_ICON_SIZE = 24;
const ACTIVE_ICON_SIZE = 36;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  curveContainer: {
    position: 'absolute',
    bottom: 0,
    left: -50,
  },
  UpperCurve: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  logo: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: '#e6e6e6',
    padding: 5,
    borderRadius: 10,
    zIndex: 10,
  },
  contentContainer: {
    flex: 3,
    width: '85%',
    paddingTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  permissionsList: {
    width: '100%',
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: PADDING_VERTICAL,
  },
  permissionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginLeft: 10,
  },
  activePermissionText: {
    fontWeight: '700',
    color: '#000',
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  grantButton: {
    backgroundColor: '#5f30b2',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  allGrantedButton: {
    backgroundColor: '#4CAF50',
  },
  grantButtonText: {
    fontSize: 18,
    fontWeight: '900',
    color: 'white',
  },
  iconContainer: {
    width: ICON_CONTAINER_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  activeIconContainer: {
    marginVertical: 10,
  },
  dashedLine: {
    position: 'absolute',
    left: ICON_CONTAINER_WIDTH / 2 - 1,
    width: 0,
    borderLeftWidth: 1.5,
    borderColor: '#3d355a',
    borderStyle: 'dotted',
  },
  defaultDashedLine: {
    top: STANDARD_ICON_SIZE + 4,
    height: PADDING_VERTICAL * 2 + 10,
  },
  activeDashedLine: {
    top: ACTIVE_ICON_SIZE + 4,
    height: PADDING_VERTICAL * 2 + (ACTIVE_ICON_SIZE - STANDARD_ICON_SIZE) + 20,
  },
});
