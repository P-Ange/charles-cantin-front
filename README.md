# [Evaluation de formation STUDI] Projet d'une application web pour le photographe Charles CANTIN.

## 1. Contexte de l'évaluation
Charles Cantin est passionné par la photographie.
Même s’il pratique en amateur, son talent est reconnu et beaucoup font appel à lui pour immortaliser
leurs événements.
Pour passer à la vitesse supérieure et peut-être vivre de cette activité, il désire pouvoir se construire un
portfolio sous la forme d’un site web.  
Il souhaite:
- une page d'accueil avec le logo que son ami a créé.
- une page de galerie pour exposer ses photos.
- une page pour exposer ses prestations ainsi que la grille tarifaire de celle-ci.
- une page de contact pour qu'on puisse lui poser des questions et éventuellement prendre RDV pour une prestation.


## 2. Environnement technique
L'environnement technique imposée par l'évaluation devait être composée de seulement des languages front (HTML, JS, CSS) avec la possibilité d'utiliser
un framework type ReactJS, NextJS, Eleventy etc...  
Pour le back, un CMS headless était recommandé.  
Pour ma part, j'ai utilisé:  
- NextJS avec l'aide du framework CSS Tailwind
- Le CMS Headless "Strapi" avec une API reliée à une base de données Postgres, intégrées directement à l'aide de la plateforme Heroku.

## 3. Procédure de mise en place
- Cloner le fichier sur votre ordinateur avec  
`git clone https://github.com/P-Ange/charles-cantin-front.git`
- Installer les dépendances de l'application avec  
`npm install`
- Visualiser le site en local (Localhost) avec 
`yarn dev` ou `nmp run dev`
- Déployer le site en ligne
`yarn build` ou `npm run build` puis transférer le dossier Github sur un hébergeur
- Avec cette procédure, il est désormais possible de naviguer sur le site en local ou de le déployer en ligne.
