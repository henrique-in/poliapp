import React from 'react';
import {Image, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAuth} from '~/hooks/auth';
import {useTheme} from '~/hooks/theme';

import {AntDesign} from '@expo/vector-icons';

// import { Container } from './styles';

export const Header: React.FC = () => {
  const {user, signOut} = useAuth();
  const {theme} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.main,
        height: RFValue(120),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: user.avatar}}
          style={{
            width: RFValue(50),
            height: RFValue(50),
            borderRadius: 50,
          }}
        />
        <Text
          style={{fontSize: RFValue(15), color: theme.white, paddingLeft: 10}}>
          {user.name}
        </Text>
      </View>
      <AntDesign
        name="logout"
        size={24}
        color={theme.white}
        onPress={() => signOut()}
      />
    </View>
  );
};
