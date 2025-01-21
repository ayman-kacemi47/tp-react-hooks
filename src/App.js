import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const SearchContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
    <SearchContext.Provider value={{searchTerm, setSearchTerm }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
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
    </SearchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
