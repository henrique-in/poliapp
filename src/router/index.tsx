import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {PrivateRoutes} from './private.routes';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '~/hooks/auth';

import {color} from '~/theme/colors';

export default function Routes() {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#6545a4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={color.white} />
      </View>
    );
  }

  return user ? <PrivateRoutes /> : <AuthRoutes />;
}
