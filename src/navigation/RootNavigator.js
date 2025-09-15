import React from 'react';
import { Easing } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import OfflineScreen from '../screens/OfflineScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Ready from '../screens/Ready'
const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Offline" component={OfflineScreen} options={{ headerShown: false }} />
      <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ready" component={Ready} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
