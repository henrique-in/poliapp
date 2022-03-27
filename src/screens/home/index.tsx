import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '~/hooks/auth';

// import { Container } from './styles';

export const Home: React.FC = () => {
  const {user, signOut} = useAuth();

  // console.tron.log(user);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={signOut}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
