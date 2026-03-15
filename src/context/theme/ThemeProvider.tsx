import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Preference, type SystemTheme } from './context';

const CYCLE: Preference[] = ['auto', 'dark', 'light'];

function getCookiePreference(): Preference {
  const match = document.cookie.match(/(?:^|;\s*)theme=([^;]+)/);
  const val = match?.[1];

  return val === 'dark' || val === 'light' || val === 'auto' ? val : 'auto';
}

function setCookiePreference(pref: Preference) {
  document.cookie = `theme=${pref};path=/;max-age=31536000`;
}

function getSystemTheme(): SystemTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Preference>(() =>
    getCookiePreference(),
  );

  const [systemTheme, setSystemTheme] = useState<SystemTheme>(() =>
    getSystemTheme(),
  );

  // Always track system preference changes, even when explicit dark/light is set
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const resolvedTheme: SystemTheme =
    preference === 'auto' ? systemTheme : preference;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const cycleTheme = () => {
    setPreference((prev) => {
      const next = CYCLE[(CYCLE.indexOf(prev) + 1) % CYCLE.length];
      setCookiePreference(next);

      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{ preference, systemTheme, resolvedTheme, cycleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
