# Portfolio React

Un portfolio personnel construit avec React pour présenter des projets, compétences et expériences.

## Fonctionnalités

- Présentation des projets (vignettes, descriptions, liens)
- Page "À propos" et CV téléchargeable
- Contact via formulaire (ou lien mail)
- Responsive et optimisé pour mobile

## Installation

1. Cloner le dépôt :
   git clone <URL>
2. Installer les dépendances :
   npm install

## Développement

- Lancer le serveur de développement :
  npm start
- Générer une version de production :
  npm run build

## Structure suggérée

- public/ — fichiers publics (index.html, images)
- src/
  - components/ — composants réutilisables
  - pages/ — pages (Accueil, Projets, À propos, Contact)
  - assets/ — images et styles
  - App.jsx, index.jsx

## Personnalisation rapide

- Mettre à jour les données (projets, bio) dans un fichier JSON ou un contexte React
- Modifier les styles (CSS, SASS ou Tailwind)
- Remplacer les images et liens par les vôtres

## Déploiement

Déployer sur Vercel, Netlify, GitHub Pages ou tout service supportant les apps React. Utiliser le dossier `build` généré par `npm run build`.
