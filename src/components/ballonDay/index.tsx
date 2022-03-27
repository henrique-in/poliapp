import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '~/hooks/theme';
import {UserRequest} from '~/models/requests';

// import { Container } from './styles';

export const BallonDay: React.FC = () => {
  const {theme} = useTheme();

  const [frases, setFrases] = useState({});
  const [loading, setLoading] = useState(false);

  const loadMessage = async () => {
    setLoading(true);
    try {
      const result = await UserRequest.getFrases('motivacao', 365);
      const number = Math.floor(Math.random() * 365);
      setFrases(result.data.frases[number]);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    void loadMessage();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator
          color={theme.main}
          size={'large'}
          style={{marginTop: RFValue(20)}}
        />
      ) : (
        <View
          style={{
            width: '90%',
            height: RFValue(170),
            backgroundColor: theme.backgroundSecondary,
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
          }}>
          <ScrollView>
            <Text style={{fontSize: RFValue(15), color: theme.primaryText}}>
              Para te motivar:
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                marginVertical: 15,
                textAlign: 'justify',
                color: theme.primaryText,
              }}>
              {frases?.texto}
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                marginTop: 10,
                color: theme.primaryText,
              }}>
              {frases?.autor}
            </Text>
          </ScrollView>
        </View>
      )}
    </>
  );
};
