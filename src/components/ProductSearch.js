import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext, SearchContext, ThemeContext } from '../App';

const ProductSearch = () => {
  // const [searchTerm, setSearchTerm] = useState('');  afin qu'il sera accessible dans ProductList on va l'utilser dans le parent commun (App.js)
  const { isDarkTheme } = useContext(ThemeContext);
  const { searchTerm, setSearchTerm  } = useContext(SearchContext);

  

  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const { translations , selectedLanguage } = useContext(LanguageContext);
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={translations[selectedLanguage.value]["chercher_produit"]}
        className={`form-control ${isDarkTheme ? 'text-light bg-dark dark-theme-placeholder ' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;