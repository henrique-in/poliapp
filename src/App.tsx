import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';
import AppProvider from './hooks';
import Routes from './router';
import { color } from './theme/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
        <AppProvider>
          <View style={{flex:1, backgroundColor:color.background}}>
            <Routes/>
          </View>
        </AppProvider>
    </NavigationContainer>
    
  )
}
