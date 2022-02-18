import { useState, useContext, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) return localTheme;
    else return 'light';
  });

  const toggleTheme = () => {
    const storeTheme = (theme) => {
      localStorage.setItem('theme', theme);
      setTheme(theme);
    };

    if (theme !== 'dark') storeTheme('dark');
    else storeTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme can not be used outside of ThemeProvider');
  }

  return context;
};
