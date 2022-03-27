import {TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  content: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: RFValue(110),
    justifyContent: 'flex-end',
  } as ViewStyle,
};
