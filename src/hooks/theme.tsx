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
}

interface ThemeContext {
  theme: ThemeProps;
  toogleTheme(type: string): Promise<void>;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps);

  useEffect(() => {
    async function loadThemeType(): Promise<void> {
      const themeType = await AsyncStorage.getItem('@PolliApp:themeType');

      if (themeType === 'dark') {
        setTheme(themes.dark);
      } else {
        setTheme(themes.light);
      }
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
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
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
