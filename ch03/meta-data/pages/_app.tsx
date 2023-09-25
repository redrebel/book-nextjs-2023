//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar";
import {useState} from   'react';
import ThemeContext from "@/components/themeContext";

const themes = {
    dark: {
        background: 'black',
        color: 'white'
    },
    light: {
        background: 'white',
        color: 'black'
    }
};

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div style={{
          width: '100%',
          minHeight: '100vh',
          ...themes[theme]
      }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
      </ThemeContext.Provider>
  )
}