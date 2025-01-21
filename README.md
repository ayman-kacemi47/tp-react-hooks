# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/ayman-kacemi47/tp-react-hooks.git
cd tp-react-hooks
```


2. Installer les dépendances :
```bash
npm install
```

3. Lancer l'application :
```bash
npm start
```

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici


## réponse pour l'exercice 1 :

J'ai utilisé ```const [searchTerm, setSearchTerm] = useState('');``` dans App.js au lieu du ProductSearch donc pour donner l'accés a le component ProductSearch.js pour changer et afficher la valeur searchTerm,  et pour ProductList searchTerm donc je peux l'utiliser dans le filtre, tout ça grace à le hook createContext.

voilà quelque image d'application où j'ai traité les 3 cas 
   - la liste des produits est vide
   ![liste des produits est vide](captures/no_products.png)

   - la liste des produits est pleine mais le searchTerm ne correspon à aucun produit
   ![pas de produit correspond à votre recherche](captures/search_not_found.png)
   
   - la liste filtré selon le terme entré
   ![produits correspond à votre recherche](captures/search_result.png)
   - pas des difficultés renconctrées 😊





### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.