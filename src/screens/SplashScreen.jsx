import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Video from 'react-native-video';
import vc from '../assets/splash_vid.mp4'
const SplashScreen = ({navigation}) => {

 useEffect(() => {
  setTimeout(() => {
    navigation.replace('welcome')
  }, 3000);
 }, [])
  return (
    <Video
    source={{ uri: vc }}
    style={styles.backgroundVideo}
    resizeMode="cover"
    />
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
})