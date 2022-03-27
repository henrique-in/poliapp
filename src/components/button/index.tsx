import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '~/hooks/theme';

// import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  text: string;
  textColor: string;
  buttonColor: string;
  loading?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  textColor,
  buttonColor,
  loading,
  ...rest
}) => {
  const {theme} = useTheme();
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={{
        backgroundColor: buttonColor,
        width: RFValue(250),
        height: RFValue(50),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      {loading ? (
        <ActivityIndicator color={theme.backgroundSecondary} />
      ) : (
        <Text style={{color: textColor, fontSize: RFValue(15)}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
