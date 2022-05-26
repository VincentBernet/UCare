# UCare

___TODO: update then translate this documentation in english___

- [x] Deployment on the **App Store** and **Google Play**. Almost finished the deployment on GooglePlay, waiting approval
- [x] Cleaning code.
- [x] Add unit testing to front.
- [x] Add automation test, and deployment pipeline.
- [ ] Describe the testing and deployment plan.
- [ ] Update ReadMe. 

Nowadays, more and more people follow a particular diet, with different dietary restrictions linked to their allergies, beliefs or moral sense.

They need to know easily if the products they want to consume are in accordance with their diet, without wasting their time checking each ingredient one by one on a label sometimes difficult to read.

This application will be intended for all those who find themselves in these needs and will be available on phone.

UCare is available on Google play just there : https://play.google.com/store/apps/details?id=com.ucareapp.app

---

## Application

<p style="display: flex;">
    <img width="195" height="auto" src="screenshot/screenAccueil_1.png"\>
    <img width="195" height="auto"  src="screenshot/screenCurrentProduct_1.png"\>
    <img width="195" height="auto"  src="screenshot/screenCurrentProduct_2.png"\>
    <img width="195" height="auto"  src="screenshot/screenFavoris_1.png"\>
</p>

---

## Table des matières
-  **[Code Quality & Testing Plan & CI / CD](#GoodPractice)**
-  **[Technical Stack](#Stack)**
-  **[Functionalities](#Functionalities)**
-  **[Installation for Dev](#Installation)**
-  **[Licence](#Licences)**

---
<a name='GoodPractice'></a>

## Code Quality

In the intent of improving code quality of this application, i implemented severals tools :
- firsty i used ESLint as a linter on the front & the back-end part. I used AirBnB configuration, to replicate professional rules.
- secondly for the testing part, i used Jest (again on the front & back-end part), i cover the critical part of the application and tried to maximize the testing coverage.
- thirdly i add husly to ensure that on every commit the linter as been runned, so the linter update will be done piece by piece, and on each push jest is also runned, if at least a test fail then the push is canceled.
- finaly i used github actions, to run the whole linter & testing process when a pull request or somoene is pushing on the main branch.

Concept and patern i followed during the development :
- On the front part, i tried to segment my code in as many react component as possible, to reuse them on multiple pages, and unit test them easely
- All of functions have been extract has much as possible, again to ensure easy Unit testing, and have been put in a utility folder within a named accordly named with their functional part and domain

**eslint, jest, husky, github actions**

## Testing Plan
Jest

## Deployment process
Strongly encourage you to follow the expo documentation : https://docs.expo.dev/submit/android/ 

---
<a name='Installation'></a>

## Installation

Prérequis :
-  Avoir installé Git
-  Node JS

Dans votre dossier d'installation, créez votre git et connectez le à ce repository :
```
git init
git remote add origin https://github.com/VincentBernet/VegeDream
git pull origin master
```

Pour ensuite installer tous les composants nécessaires à l'application :

```
npm install
```

Installer l'application expo sur votre smartphone :
```
Android : https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US
Apple : https://apps.apple.com/us/app/expo-go/id982107779
```

---

1] Run la commande suivante pour lancer le front-end :
```
npm start
```
2] Ouvrir Expo sur votre smartphone puis scanner le QR code afficher sur votre terminale, l'application mobile se lance et fonctionne sur votre appareil 🔥




---

<a name='Stack'></a>

## Stack

```
- React-Native for the front-end
- Nest.js (framework node.js) for the back-end
- PostGreSql for the DB part
- Host on Heroku
```

OpenFoodFact : https://fr.openfoodfacts.org/produit/7613037398083/le-bon-vegetal-hache-cru-soja-a-cuisiner-herta

---

<a name='Functionalities'></a>

## Functionalities

Sur cette application, nous avons implémenté de multiples fonctionnalités telles que :

-  Scan d'un produit
-  Analyse du produit (vegan, végétarien, sans huile de palme, nutriscore)
-  Recherche et proposition d'alternative au produit consulté
-  Ajout, suppression et consultation de produit sous forme de favoris

---

<a name='Licences'></a>

## Licences

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-  **[MIT license](http://opensource.org/licenses/mit-license.php)**
-  Copyright 2021 © **[UCare's Team](#Equipe)**.
