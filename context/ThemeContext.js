import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: {
      background: isDarkTheme ? '#121212' : '#E9E9E9',
      text: isDarkTheme ? '#fff' : '#000000',
      card: isDarkTheme ? '#1E1E1E' : '#E9E9E9',
      button: isDarkTheme ? '#333' : '#007AFF',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
