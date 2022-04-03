import {Platform, TextStyle, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = {
  container: {
    flex: 1,
  } as ViewStyle,
  content: {
    width: '90%',
    height: RFValue(190),
    position: 'absolute',
    bottom: -60,
    alignSelf: 'center',
    marginTop: RFValue(20),
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 4,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shpadowColor: '#000',
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
    fontSize: RFValue(20),
    fontWeight: 'bold',
  } as TextStyle,
  name: {
    marginTop: 10,
    fontSize: RFValue(15),
    fontWeight: 'bold',
    textAlign: 'center',
  } as TextStyle,
  cpf: {
    fontSize: RFValue(13),
    fontWeight: '300',
    textAlign: 'center',
  } as TextStyle,
};
