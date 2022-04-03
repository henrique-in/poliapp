/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '~/hooks/theme';
import {styles} from './styles';

import {Ionicons, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '~/hooks/auth';
import {MaskService} from 'react-native-masked-text';

export const HeaderUser: React.FC = () => {
  const {theme, toogleTheme, themeType} = useTheme();
  const {user} = useAuth();

  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.main,
        width: '100%',
        height: RFValue(250),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: RFValue(50),
          width: '100%',
          paddingHorizontal: RFValue(12),
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{position: 'absolute', left: RFValue(15), zIndex: 1}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>

        <Text style={{...styles.title, color: theme.white}}>PERFIL</Text>
      </View>

      <View
        style={{
          ...styles.content,
          backgroundColor: theme.backgroundSecondary,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 10, zIndex: 1}}>
          <Feather name="edit" size={24} color={theme.primaryText} />
        </TouchableOpacity>

        <Image
          source={{uri: user.avatar}}
          resizeMode="cover"
          style={{
            width: 120,
            height: 120,
            borderRadius: 75,
            alignSelf: 'center',
          }}
        />
        <Text style={{...styles.name, color: theme.primaryText}}>
          {user.name}
        </Text>
        <Text style={{...styles.cpf, color: theme.primaryText}}>
          {MaskService.toMask('cpf', user.cpf)}
        </Text>
      </View>
    </View>
  );
};
