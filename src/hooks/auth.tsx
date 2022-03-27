/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api';
import {Alert} from 'react-native';

interface AuthState {
  user: User;
}

interface SignInCredentials {
  cpf: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  // updateUser(user: User): Promise<void>;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  cpf: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@PolliApp:user');

      if (user) {
        setData({user: JSON.parse(user)});
      }

      setLoading(false);
    }

    void loadStorageData();
  }, []);

  const signIn = useCallback(async cpf => {
    const response = await api.get('/user');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const user = response.data;

    const filterUser = user.filter((data: User) => data?.cpf === cpf);

    if (filterUser[0].name) {
      await AsyncStorage.setItem(
        '@PolliApp:user',
        JSON.stringify(filterUser[0])
      );

      // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setData({user: filterUser[0]});
    } else {
      return Alert.alert('', 'Usuário não encontrado');
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@PolliApp:user');

    setData({} as AuthState);
  }, []);

  // const updateUser = useCallback(
  //   async (user: User) => {
  //     await AsyncStorage.setItem('@PolliApp:user', JSON.stringify(user));
  //     setData({
  //       access_token: data.access_token,
  //       user,
  //     });
  //   },
  //   [setData, data.access_token],
  // );

  return (
    <AuthContext.Provider value={{user: data.user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
