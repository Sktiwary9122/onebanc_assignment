import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import OfflineScreen from './src/screens/OfflineScreen';
import NetInfo from '@react-native-community/netinfo';
import PermissionsProvider from './src/utils/PersmissionContext';
const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#FFFFFF' },
};

export default function App() {
  function validator(str) {
    if (
      !str.startsWith('9') ||
      !str.startsWith('8') ||
      !str.startsWith('7') ||
      !str.startsWith('6')
    ) {
      console.log('Invalid number');
    }
    // if it has 6 consecutive numbers
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] == str[i]) {
        count++;
      }
    }
    if (count == 6) {
      console.log('Invalid number');
    }
    // if it does not has 0 -9
    if (
      !str.includes('0') ||
      !str.includes('1') ||
      !str.includes('2') ||
      !str.includes('3') ||
      !str.includes('4') ||
      !str.includes('5') ||
      !str.includes('6') ||
      !str.includes('7') ||
      !str.includes('8') ||
      !str.includes('9')
    ) {
      console.log('Invalid number');
    }
  }

  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const offline = state.isInternetReachable === false;
      setOffline(offline);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!offline) return <OfflineScreen />;
  return (
    <PermissionsProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />

        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PermissionsProvider>
  );
}
