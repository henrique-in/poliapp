import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React from 'react';

import AppProvider from './hooks';
import Routes from './router';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
