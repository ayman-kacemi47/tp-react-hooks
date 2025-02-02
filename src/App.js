import React, { createContext, useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import en_flag from "./assets/en_flag.svg";
import fr_flag from "./assets/fr_flag.svg";
import ar_flag from "./assets/ar_flag.svg";

import translations from "./assets/translations.json"

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const SearchContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedLanguage, setSelectedLanguage] = useState({
    value: "en",
    label: (
      <div>
        <img src={en_flag} alt="English" width="20" /> English
      </div>
    ),
  });
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue

  useEffect(()=>{
    console.log("ahooooo ", selectedLanguage)
    const  isRtl = selectedLanguage.value === "ar" ;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  },[selectedLanguage]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
    <SearchContext.Provider value={{searchTerm, setSearchTerm }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
    <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage, translations }}>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <LanguageSelector className="ms-auto" />
        <header className="my-4">
          <h1 className="text-center"> { translations[selectedLanguage.value]["catalogue_produits"] }</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
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
