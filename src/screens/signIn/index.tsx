/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {useTheme} from '~/hooks/theme';
import {styles} from './styles';

export const SignIn: React.FC = () => {
  const {theme, toogleTheme} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: theme.background}}>
      <View
        style={{
          backgroundColor: theme.backgroundSecondary,
          width: '90%',
          height: RFValue(300),
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: '80%'}}>
          <Text
            style={{
              color: theme.primaryText,
              fontSize: RFValue(15),
              marginBottom: RFValue(10),
            }}>
            CPF
          </Text>
          <TextInput
            placeholder="000.000.000-00"
            placeholderTextColor={theme.primaryText}
            keyboardType="number-pad"
            style={{
              width: '100%',
              paddingVertical: RFValue(10),
              borderRadius: 5,
              borderWidth: 0.6,
              padding: 5,
              borderColor: theme.primaryDark,
              color: theme.primaryLight,
              fontSize: RFValue(14),
            }}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => toogleTheme('dark')}>
        <Text style={{color: theme.primaryText}}>dark</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toogleTheme('light')}>
        <Text style={{color: theme.primaryText}}>light</Text>
      </TouchableOpacity>
    </View>
  );
};
