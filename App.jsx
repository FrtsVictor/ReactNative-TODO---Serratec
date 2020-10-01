/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// SafeArea controll status bar apces
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Navigation install routes, all routes are encapsuled by NavigationContainer
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';

import Routes from './src/routes';

export default function App() {
  return (

    <SafeAreaProvider style={{ paddingTop: 24 }}>
      <StatusBar style="auto" />
      <AppProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}
