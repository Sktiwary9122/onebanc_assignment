import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { request, RESULTS } from 'react-native-permissions';
import { useIsFocused } from '@react-navigation/native';
import {
  LowerCurve,
  UpperCurve,
  OneBancLogo,
  Cross,
  PhoneGraphic,
} from '../components/SvgIcons';
import { usePermissions } from '../utils/PersmissionContext';
const PhoneDenialScreen = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const { permissionId } = route.params; 
  const { permissions, updatePermissionStatus } = usePermissions();

  const permissionInfo = permissions.find(p => p.id === permissionId);

  const handleRetryPermission = async () => {
    if (!permissionInfo) return;

    try {
      const result = await request(permissionInfo.permission);
      if (result === RESULTS.GRANTED) {
        updatePermissionStatus(permissionInfo.id, true);
        navigation.goBack();
      } else {
        Alert.alert(
          'Permission Required',
          'Phone permission is essential for mobile verification. Please enable it from your device settings to continue.',
        );
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
      Alert.alert('Error', 'An error occurred while requesting permissions.');
    }
  };

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

      <View style={styles.bottomContainer}>
        <PhoneGraphic height={300} width={400} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          We won't be able to proceed with your
          <Text style={styles.subtitle}> mobile verification </Text>
          without
          <Text style={styles.subtitle}> phone permission</Text>
        </Text>
        <TouchableOpacity onPress={handleRetryPermission}  disabled={!isFocused}>
          <Text style={styles.grantButtonText}>Enable</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhoneDenialScreen;


const PADDING_VERTICAL = 12;
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
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
     fontWeight: '700',
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 250,
  },
  allGrantedButton: {
    backgroundColor: '#4CAF50',
  },
  grantButtonText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5f30b2',
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

