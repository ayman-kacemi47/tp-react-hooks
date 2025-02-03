import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import useLocalStorage from '../hooks/useLocalStorage';


const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { translations , selectedLanguage } = useContext(LanguageContext);
  const {setItem} = useLocalStorage("themeIsDark");
  return (
    <button
      onClick={() => { setItem(!isDarkTheme);  setIsDarkTheme(!isDarkTheme)}}
      className={`px-5 py-2 rounded ${
        isDarkTheme 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {isDarkTheme ?  translations[selectedLanguage.value]["Modes"]["clair"] : translations[selectedLanguage.value]["Modes"]["sombre"] }
    </button>
  );
};

export default ThemeToggle;