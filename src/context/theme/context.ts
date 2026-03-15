import { createContext } from 'react';

export type Preference = 'auto' | 'dark' | 'light';
export type SystemTheme = 'dark' | 'light';

export interface ThemeContextValue {
  preference: Preference;
  systemTheme: SystemTheme;
  resolvedTheme: SystemTheme;
  cycleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
