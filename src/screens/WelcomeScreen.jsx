import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  LowerCurve,
  UpperCurve,
  OneBancLogo,
  WelcomeGraphic,
  KotakLogo,
  YesBankLogo
} from '../components/SvgIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = ({ navigation }) => {
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
      <View style={{ flex: 1, position: 'absolute', top: 150 }}>
        <WelcomeGraphic height={320} width={410} />
        <Text
          style={{
            fontSize: 29,
            fontWeight: '500',
            color: 'black',
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Welcome to One Banc
        </Text>
        <Text style={styles.desc}>Let's join hands in the journey</Text>
        <Text style={styles.desc2}>towards financial wellness</Text>
      </View>
      <TouchableOpacity style={{ position: 'absolute', top: 600 }} onPress={() => navigation.push('ready')}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '900',
            color: 'white',
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: '#5f30b2',
            paddingVertical: 10,
            paddingHorizontal:20,
            borderRadius: 5 ,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <Text style={{ position: 'absolute', bottom: 90, fontSize: 12, fontWeight: '400', color: 'black', alignSelf: 'center' }}>
        Banking Partner
      </Text>
      <View style={{ position: 'absolute', bottom: 25,left: 90 }}>
        <KotakLogo height={50} width={500} />
      </View>
      <View style={{ position: 'absolute', bottom: 35,left: 220,backgroundColor: 'black',width: 1,height: 40 }}></View>
      <View style={{ position: 'absolute', bottom: 25,left: 250 }}>
          <YesBankLogo height={50} width={500}/>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
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
  desc: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  desc2: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
});
