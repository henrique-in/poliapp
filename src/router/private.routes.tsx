import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Profile} from '~/screens';

const Private = createNativeStackNavigator();

export const PrivateRoutes = () => (
  <Private.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="home">
    <Private.Screen name="home" component={Home} />
    <Private.Screen name="profile" component={Profile} />
  </Private.Navigator>
);
