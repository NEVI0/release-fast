'use client';

import { useEffect, useState } from 'react';

import { STORAGE_THEME_KEY } from '@app/constants/storage';

import { Theme, ThemeContext } from './useTheme';

const AVAILABLE_THEMES: Theme[] = ['light', 'dark'];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  function toggleTheme() {
    setThemeState((current) => (current === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) as Theme;
    if (savedTheme && AVAILABLE_THEMES.includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage
    const root = document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem(STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
