import { useState, useEffect } from 'react';

// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadCounter, setReloadCounter] = useState(0); // State for reload

  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination
  const [limit,setLimit]=useState(9);
  const [skip,setSkip]=useState(0);
  const [total,setTotal]=useState(0);


  useEffect(() => {
    console.log("fetch number ", reloadCounter)
    const fetchProducts = async () => {
      setLoading(true);
      console.log("fetch entred ")
      try {
        // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
        const response = await fetch(`https://api.daaif.net/products?skip=${skip}&limit=${limit}&delay=1000`);
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        console.log("data ", data)
        setTotal(data.total)
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }finally{
      
        setLoading(false);
      }
    };
    fetchProducts();


  }, [reloadCounter, skip, limit]); // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination



  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const reload = () => {
    setLoading(true);
    setReloadCounter(prevCounter => prevCounter + 1);
    setLoading(false);
    
  };


  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination

 

  return { 
    products, 
    loading, 
    error,
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    reload,
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
    total,
    limit,
    skip,
    setSkip
  };
};

export default useProductSearch;