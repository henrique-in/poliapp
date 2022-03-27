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
import {themes} from '~/theme/colors';

interface ThemeProps {
  main: string;
  button: string;
  placeholder: string;
  background: string;
  backgroundSecondary: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryText: string;
  secondary: string;
  secondaryDark: string;
  errors: string;
  redLight: string;
  white: string;
  skyBlue: string;
  green: string;
  buttonText: string;
}

interface ThemeContext {
  theme: ThemeProps;
  themeType: string;
  toogleTheme(type: string): Promise<void>;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps);
  const [themeType, setThemeType] = useState('');

  useEffect(() => {
    async function loadThemeType(): Promise<void> {
      const themeType = await AsyncStorage.getItem('@PolliApp:themeType');

      if (themeType === 'dark') {
        setTheme(themes.dark);
      } else {
        setTheme(themes.light);
      }
      setThemeType(themeType);
    }

    void loadThemeType();
  }, []);

  const toogleTheme = useCallback(async (type: string) => {
    await AsyncStorage.setItem('@PolliApp:themeType', type);
    if (type === 'dark') {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
    setThemeType(type);
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toogleTheme, themeType}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
