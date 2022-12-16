import React, { useEffect, useMemo } from "react";
import { useCookies } from 'react-cookie';

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['theming']);

  const darkActive = useMemo(() => {
    return cookies.theming === 'dark';
  }, [cookies])

  useEffect(() => {
    if(cookies.theming) {
      document.documentElement.setAttribute('data-theme', cookies.theming);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [cookies])
  
  const onChangeTheme = (e) => {
    if (!e.target.checked) {
      setCookie('theming', 'light', { path: '/' });
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setCookie('theming', 'dark', { path: '/' });
      document.documentElement.setAttribute('data-theme', 'dark');
    }    
  }

  const contextTheme = {
    onChangeTheme,
    darkActive
  }

  return (
    <ThemeContext.Provider value={contextTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeContextProvider
}