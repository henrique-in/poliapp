import React from 'react';
import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, BallonDay} from '~/components';

import {useAuth} from '~/hooks/auth';
import {useTheme} from '~/hooks/theme';
import {UserRequest} from '~/models/requests';

// import { Container } from './styles';

export const Home: React.FC = () => {
  const {user, signOut} = useAuth();
  const {theme, toogleTheme} = useTheme();

  // console.tron.log(user);

  const [frases, setFrases] = React.useState({});

  const loadMessage = async () => {
    try {
      const result = await UserRequest.getFrases('motivacao', 365);
      const number = Math.floor(Math.random() * 365);
      setFrases(result.data.frases[number]);
    } catch (error) {}
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.background}}>
      <Header />

      <BallonDay />

      {/* <TouchableOpacity onPress={signOut}>
        <Text>Sair</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity onPress={() => toogleTheme('dark')}>
        <Text style={{color: theme.primaryText}}>dark</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toogleTheme('light')}>
        <Text style={{color: theme.primaryText}}>light</Text>
      </TouchableOpacity> */}
    </View>
  );
};
function useState(arg0: {}): [any, any] {
  throw new Error('Function not implemented.');
}
