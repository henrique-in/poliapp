/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderUser} from '~/components';
import {useTheme} from '~/hooks/theme';
import {styles} from './styles';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

export const Profile: React.FC = () => {
  const {theme, toogleTheme, themeType} = useTheme();

  const handleTheme = () => {
    if (themeType === 'white') {
      void toogleTheme('dark');
    } else {
      void toogleTheme('white');
    }
  };
  return (
    <View style={{...styles.container, backgroundColor: theme.background}}>
      <HeaderUser />
      <View
        style={{
          flex: 1,
          paddingTop: RFValue(60),
          paddingHorizontal: RFValue(18),
        }}>
        <TouchableOpacity
          onPress={() => handleTheme()}
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={RFValue(30)}
            color={theme.primary}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: RFValue(14),
              color: theme.primaryText,
            }}>
            Trocar tema
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
