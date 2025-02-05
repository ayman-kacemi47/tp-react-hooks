import React, { createContext, useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';

import {options} from "./assets/options.js";

import translations from "./assets/translations.json"
import useLocalStorage from './hooks/useLocalStorage';

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const SearchContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  
  const {getItem:getThemItem} = useLocalStorage("themeIsDark");
  const [isDarkTheme, setIsDarkTheme] = useState( getThemItem ?? false);

  const [searchTerm, setSearchTerm] = useState('');
  const { getItem: getPreferedLang} = useLocalStorage("lang");

  
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

  // TODO: Exercice 2.2 - Ajouter l'état pour la langue
  console.log("ahooooo ", selectedLanguage)
  
  useEffect(() => {

    const lang = getPreferedLang("lang");
    console.log("lang ", lang);
    console.log("selectedLang before ", selectedLanguage);
    if(lang === "en" || lang == null ||lang === undefined) setSelectedLanguage(options[0])
      if(lang === "fr") setSelectedLanguage(options[1])
        if(lang === "ar") setSelectedLanguage(options[2])
          console.log("selectedLang after ", selectedLanguage);


      
 
  },[]);
  
  useEffect(()=>{
    console.log("ahooooo ", selectedLanguage)
    const  isRtl = selectedLanguage.value === "ar" ;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";

    console.log(`${selectedLanguage.value === 'ar' ? "me-auto" : "ms-auto"}`);
    
  },[selectedLanguage]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
    <SearchContext.Provider value={{searchTerm, setSearchTerm }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
    <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage, translations }}>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center"> { translations[selectedLanguage.value]["catalogue_produits"] }</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
            <LanguageSelector className={`${selectedLanguage.value === 'ar' ? "me-auto" : "ms-auto"}`}  />
          </div>
        </header>
        <main>
          <ProductSearch />
          <ProductList />
        </main>
      </div>
    </LanguageContext.Provider>
    </SearchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
