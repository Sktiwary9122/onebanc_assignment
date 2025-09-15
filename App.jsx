import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import OfflineScreen from './src/screens/OfflineScreen'
import NetInfo from '@react-native-community/netinfo';
const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: '#FFFFFF' } };

export default function App() {
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

  if (offline) return <OfflineScreen />;
  return (
    <SafeAreaProvider>
     <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
