import {Platform, TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = {
  container: {
    flex: 1,
  } as ViewStyle,
  content: {
    width: '90%',
    height: RFValue(170),
    alignSelf: 'center',
    marginVertical: RFValue(15),
    borderRadius: 20,
    padding: 10,
    elevation: 4,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
      },
    }),
  } as ViewStyle,
  title: {
    fontSize: RFValue(13),
    marginVertical: 15,
    textAlign: 'center',
  } as TextStyle,
};
