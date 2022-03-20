import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Home } from '~/screens'



const Private = createNativeStackNavigator()

export const PrivateRoutes = () => (
    <Private.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Home"
    >
        <Private.Screen name="Home" component={Home} />
     
    </Private.Navigator>
)

