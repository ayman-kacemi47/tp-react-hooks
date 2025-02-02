import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';


const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { translations , selectedLanguage } = useContext(LanguageContext);
  
  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className={`px-5 py-2 rounded ${
        isDarkTheme 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {!isDarkTheme ?  translations[selectedLanguage.value]["Modes"]["sombre"] : translations[selectedLanguage.value]["Modes"]["clair"] }
    </button>
  );
};

export default ThemeToggle;