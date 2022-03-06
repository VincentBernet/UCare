# UCare

De nos jours, de plus en plus de personnes suivent un régime particulier, avec différentes restrictions alimentaires liées à leurs allergies, convictions ou sens moral.

Ils ont besoin de savoir facilement si les produits qu’ils souhaitent consommer sont conformes à leur régime, sans perdre leur temps à vérifier chaque ingrédient un par un sur une étiquette parfois difficilement lisible.

Cette application sera destinée à tous ceux qui se retrouvent dans ces besoins et sera disponible sur téléphone.

---

## Application

<p style="display: flex;">
    <img width="200" height="auto" src="ressource/index2.png"\>
    <img width="200" height="auto"  src="ressource/favoris.png"\>
    <img width="200" height="auto"  src="ressource/currentProduct.png"\>
    <img width="181" height="auto"  src="ressource/currentProduct2.png"\>
</p>

---

## Table des matières

-  **[Installation](#Installation)**
-  **[Stack](#Stack)**
-  **[Fonctionnalité](#Fonctionnalité)**
-  **[Équipe & Contact](#Equipe)**
-  **[Licence](#Licences)**

---

<a name='Installation'></a>

## Installation

Dans votre dossier d'installation, créez votre git et connectez le à ce repository :

Prérequis :

-  Avoir installé Git
-  Node JS

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

1] Run la commande suivante pour lancer le frontEnd :
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

<a name='Fonctionnalité'></a>

## Fonctionnalité

Sur cette application, nous avons implémenté de multiples fonctionnalités telles que :

-  Scan d'un produit
-  Analyse du produit (vegan, végétarien, sans huile de palme, nutriscore)
-  Recherche et proposition d'alternative au produit consulté
-  Ajout, suppression et consultation de produit sous forme de favoris

---

<a name='Equipe'></a>

## Équipe & Contact

> Cette application a été réalisée par 7 étudiants dans le cadre de leur cursus d'ingénieur à l'EFREI PARIS : <br>

-  **[Diogo Gabriel](https://www.linkedin.com/in/diogo-branco-gabriel-06133613b/)** & **[Thomas Damasse](https://www.linkedin.com/in/thomas-damasse-651650185/)**
-  **[Matthieu Gédéon](https://www.linkedin.com/in/matthieu-g%C3%A9d%C3%A9on-6015621a0/)** & **[Marie Léonie](https://www.linkedin.com/in/marie-l%C3%A9onie-serizot/)** & **[Maria Sadek](https://www.linkedin.com/in/maria-sadek-4624651a1/)**
-  **[Vincent Bernet](https://www.linkedin.com/in/vincent-bernet/)** & **[Vincent Lacrouts](https://www.linkedin.com/in/vincent-lacrouts/)**

> N'hésitez pas à nous contacter !

---

<a name='Licences'></a>

## Licences

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-  **[MIT license](http://opensource.org/licenses/mit-license.php)**
-  Copyright 2021 © **[UCare's Team](#Equipe)**.
