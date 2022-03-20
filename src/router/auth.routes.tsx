import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {SignIn } from '~/screens'



const Auth = createNativeStackNavigator()

export const AuthRoutes = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SignIn"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
)

