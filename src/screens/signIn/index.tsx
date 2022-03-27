/* eslint-disable @typescript-eslint/unbound-method */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {MaskService} from 'react-native-masked-text';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, Input} from '~/components';
import {useAuth} from '~/hooks/auth';

import {useTheme} from '~/hooks/theme';
import {styles} from './styles';

const light = require('~/assets/logo_light.png');
const dark = require('~/assets/logo_dark.png');

export const SignIn: React.FC = () => {
  const {theme, toogleTheme, themeType} = useTheme();
  const {signIn} = useAuth();

  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');

  const handleLogin = (cpf: string) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const data = cpf.replace(/[^a-zA-Z0-9 ]/g, '');
        void signIn(data).catch(err => Alert.alert('', 'Verifique seus dados'));
      } catch (error) {}
      setLoading(false);
    }, 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{...styles.container, backgroundColor: theme.main}}>
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          source={themeType === 'dark' ? dark : light}
          style={{
            height: 180,
            width: 180,
            alignSelf: 'center',
            position: 'absolute',
            top: RFValue(Platform.OS === 'android' ? 20 : 50),
          }}
        />
        <View
          style={{
            ...styles.content,
            backgroundColor: theme.background,
          }}>
          <View
            style={{
              height: '80%',
              paddingHorizontal: RFValue(20),
            }}>
            <Input
              label="Insira seu CPF para fazer login:"
              placeholder="000.000.000-00"
              onChangeText={text => setCpf(MaskService.toMask('cpf', text))}
              value={cpf}
            />

            <View style={{marginTop: RFValue(60)}}>
              <Button
                text="ENTRAR"
                textColor={theme.buttonText}
                buttonColor={theme.button}
                disabled={cpf.length < 11 ? true : false}
                loading={loading}
                onPress={() => handleLogin(cpf)}
              />
            </View>

            <TouchableOpacity onPress={() => toogleTheme('dark')}>
              <Text style={{color: theme.primaryText}}>dark</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toogleTheme('light')}>
              <Text style={{color: theme.primaryText}}>light</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
