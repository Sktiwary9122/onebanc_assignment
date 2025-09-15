import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  LowerCurve,
  UpperCurve,
  OneBancLogo,
  WelcomeGraphic,
  KotakLogo,
  YesBankLogo,
  Cross
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
      <View style={{ flex: 1, position: 'absolute', top: 150,maxWidth:'80%' }}>
        <Text style={{ fontSize: 25, fontWeight: '500', color: 'black', alignSelf: 'center', marginTop: 20, marginBottom: 10 }}>Are you ready?</Text>
        <View>

        </View>
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', alignSelf: 'start', marginTop: 20, marginBottom: 10 ,marginLeft:20 }}>You should have:</Text>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 ,marginTop:10}}>
             <View style={styles.dot}></View>
             <Text style={{fontWeight:'500',color:'black',fontSize:18}}>Original PAN card</Text>
        </View>
       
        <View style={{flexDirection:'row', alignItems:'center',gap:10,marginTop:10}}>
            <View style={styles.dot}></View>
            <Text style={{fontWeight:'500',color:'black',fontSize:18}}>Aadhar Number </Text>
        </View>
        
        <View style={{flexDirection:'row', alignItems:'center',gap:10,marginTop:10}}>
            <View style={styles.dot}></View>
            <Text style={{fontWeight:'500',color:'black',fontSize:18}}>Access to Aadhar linked mobile number to get OTP</Text>
        </View>
        
        <View style={{flexDirection:'row', alignItems:'center',gap:10,marginTop:10}}>
            <View style={styles.dot}></View>
            <Text style={{fontWeight:'500',color:'black',fontSize:18}}>White blank sheet & black pen</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: '400', color: 'black', alignSelf: 'center', marginTop: 30  ,maxWidth:'100%' }}>
            Do make sure you're in a well-lit room
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '400', color: 'black', alignSelf: 'center', marginBottom: 10  ,maxWidth:'90%' }}>
             with a plain wall in the background
        </Text>
      </View>
      
      <TouchableOpacity style={{ position: 'absolute', bottom: 30 }} onPress={() => navigation.push('ready')}>
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
            paddingHorizontal:100,
            borderRadius: 5 ,
          }}
        >
          Yes. I'm Ready
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', top: 50, left: 10,backgroundColor:'#e6e6e6',padding:5,borderRadius:10 }} onPress={() => navigation.goBack()}>
        <Cross/>
      </TouchableOpacity>
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
  dot:{
    height: 10,
    width: 10,
    backgroundColor: 'black',
    borderRadius: 50
  }

});
