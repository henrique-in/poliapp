import React from 'react';
import {View, TextInput, Text, TextInputProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '~/hooks/theme';

interface Props extends TextInputProps {
  label: string;
}

export const Input: React.FC<Props> = ({label, ...rest}) => {
  const {theme} = useTheme();
  return (
    <View style={{width: '100%'}}>
      <Text style={{color: theme.primaryText, fontSize: RFValue(15)}}>
        {label}
      </Text>
      <TextInput
        {...rest}
        placeholderTextColor={theme.placeholder}
        style={{
          paddingHorizontal: 10,
          borderBottomWidth: 0.8,
          borderColor: theme.primaryText,
          width: '100%',
          paddingVertical: 10,
          color: theme.primaryText,
          fontSize: RFValue(14),
        }}
      />
    </View>
  );
};
