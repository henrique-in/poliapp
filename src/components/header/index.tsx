import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAuth} from '~/hooks/auth';
import {useTheme} from '~/hooks/theme';

import {AntDesign, Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

export const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {user, signOut} = useAuth();
  const {theme} = useTheme();

  const navigation = useNavigation();

  const handleGo = () => {
    navigation.navigate('profile' as never);
  };
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => handleGo()}>
        <Image
          source={{uri: user.avatar}}
          style={{
            width: RFValue(50),
            height: RFValue(50),
            borderRadius: 50,
          }}
        />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: RFValue(15),
              color: theme.white,

              fontWeight: 'bold',
            }}>
            {user.name}
          </Text>
          <Text
            style={{
              fontSize: RFValue(14),
              color: theme.white,
              fontWeight: '300',
            }}>
            Veja seu perfil
          </Text>
        </View>
      </TouchableOpacity>
      <AntDesign
        name="logout"
        size={24}
        color={theme.white}
        onPress={() => signOut()}
      />
    </View>
  );
};
