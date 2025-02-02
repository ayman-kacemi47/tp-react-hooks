import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext, SearchContext, ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';
import useDebounce from '../hooks/useDebounce';

const ProductList = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { searchTerm } = useContext(SearchContext);
  const debounceSeach = useDebounce(searchTerm);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext pour les traductions
  const { translations , selectedLanguage } = useContext(LanguageContext);
  const { 
    products, 
    loading, 
    error,
    // TODO: Exercice 4.1 - Récupérer la fonction de rechargement
    // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
  } = useProductSearch();
  

  //filtred Products (Ex 1.1)
  const [filtedProducts, setFiltredProducts] = useState([]);

  useEffect(()=>{
    setFiltredProducts(products);
  },[products]);

  useEffect(()=>{
    if(debounceSeach.trim() !== ''){
      //kacemi_comment:on utilise products au lieu de prev pour avoir la possibiliter d'afficher la précedentes liste et ne perdre pas les données  
      setFiltredProducts(()=>[...products.filter((p)=>
        p.title.toLowerCase().includes(debounceSeach.toLowerCase())
        || p.description.toLowerCase().includes(debounceSeach.toLowerCase())
        || p.price.toString().includes(debounceSeach.toLowerCase())

        //kacemi_comment: donc pour honey jar  s'affiche meme que avec honey jarrrrrrr
        ||debounceSeach.toLowerCase().includes(p.title.toLowerCase())
        || debounceSeach.toLowerCase().includes(p.description.toLowerCase())
      


      )]);
    }else{
      //kacemi_comment: ce else est crée pour reinitilizer la liste car le debounce cause la liste à n'est pas etre reinitialiser  
      setFiltredProducts(products);
    }
  },[debounceSeach, products]);


  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">{translations[selectedLanguage.value]["chargement"]}</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
     {translations[selectedLanguage.value]["erreur"] + " " + error}
    </div>
  );
  
  return (
    <div>
   
      {/* TODO: Exercice 4.1 - Ajouter le bouton de rechargement */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {
        products.length<1 ? <div className="alert alert-info w-100" role="info">
        {translations[selectedLanguage.value]["rien_a_afficher"]}
      </div>
        :filtedProducts.length < 1 ? <div className="alert alert-info w-100" role="info">Aucun produit correspond à vote recherche: "{searchTerm}"
      </div>:
        filtedProducts.map(product => (//kacemi_comment: on utilise filtedProducts au lieu de producs pour afficher la liste filtrée
          <div key={product.id} className="col">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img 
                  src={product.thumbnail} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{translations[selectedLanguage.value]["prix"]} </strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* TODO: Exercice 4.2 - Ajouter les contrôles de pagination */}
      {/* Exemple de structure pour la pagination :
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Précédent
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              Page {currentPage} sur {totalPages}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Suivant
            </button>
          </li>
        </ul>
      </nav>
      */}
    </div>
  );
};

export default ProductList;