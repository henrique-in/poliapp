/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@PolliApp:user');

      if (user) {
        setData({user: JSON.parse(user[1])});
      }

      setLoading(false);
    }

    void loadStorageData();
  }, []);

  const signIn = useCallback(async ({cpf}) => {
    const response = await api.post('/login', {
      cpf: cpf,
    });

    const user = response.data;

    await AsyncStorage.setItem('@PolliApp:user', JSON.stringify(user));

    setData({user});
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
