

// types 

export type Projetshort = {
    id: number;
    name: string;
    shortdescriptionfr: string;
    technologies?: string[];
}

export type Projetfull = {
    id: number;
    name: string;
    shortdescriptionfr: string;
    longdescriptionfr: string;
    shortdescriptionen: string;
    longdescriptionen: string;
    linkGithub?: string;
    linkWeb?: string;
    technologies?: string[];
}

export type Projets = {
    projets: Projetshort[];
    count: number;
}


export type  ProjetCreate = {
    name: string;
    shortdescriptionfr: string;
}

export type ProjetEdit = {
    id: number;
    name: string;
    shortdescriptionfr: string;
    longdescriptionfr: string;
    shortdescriptionen: string;
    longdescriptionen: string;
    linkGithub?: string;
    linkWeb?: string;
    technologies?: string[];
}


import * as yup from "yup";

export const schemaCreateProjet = yup.object().shape({
  name: yup.string().required("Le nom du projet est requis"),
  shortdescriptionfr: yup.string().required("La description du projet est requise"),
});

export const schemaEditProjet = yup.object().shape({
  name: yup.string().required("Le nom du projet est requis"),
  shortdescriptionfr: yup.string().required("La description du projet est requise"),
  longdescriptionfr: yup.string().required("La description longue du projet est requise"),
  shortdescriptionen: yup.string().required("La description du projet est requise"),
  longdescriptionen: yup.string().required("La description longue du projet est requise"),
  linkGithub: yup.string().url("Le lien GitHub doit être une URL valide").nullable(),
  linkWeb: yup.string().url("Le lien Web doit être une URL valide").nullable(),
  technologies: yup.array().of(yup.string()).nullable(),
});


export const apiprojet = {
    projets: [
      {
        id: 1,
        name: "protfolio",
        shortdescriptionfr:
          "Un portfolio personnel développé avec React et Material-UI, mettant en avant mes compétences, expériences et projets de manière moderne et responsive. avec une API en Go pour la gestion des données.",
        technologies: ["React", "Node.js", "Go", "SQL"],
        longdescriptionfr:
          "# À propos\nCe projet de **portfolio personnel** a été conçu pour présenter mes compétences, expériences et réalisations de manière professionnelle et attrayante.\n\n## Objectifs\n- Fournir une vitrine claire et moderne de mes compétences techniques.\n- Permettre une navigation fluide et réactive sur tous les appareils.\n- Centraliser les informations de projets via une API dédiée en Go.\n\n## Détails techniques\nL'interface utilisateur est développée avec React et Material-UI pour garantir une expérience cohérente et accessible. L'API backend, écrite en Go, expose des endpoints REST pour gérer les projets et leurs métadonnées. La communication front–back est gérée via axios, avec une stratégie simple de mise en cache pour améliorer les performances.\n\n## Déploiement et maintenance\nLe projet utilise Vite pour des builds rapides et un workflow de développement optimisé. Le code est structuré pour faciliter l'ajout de nouvelles sections et la migration vers une source de données distante (BDD ou CMS). Des scripts de linting et des contrôles basiques sont exécutés avant les builds.\n\n[Voir le dépôt GitHub](https://github.com/sylvaintr/portfolio-react)",
        shortdescriptionen:
          "A personal portfolio developed with React and Material-UI, showcasing my skills, experiences, and projects in a modern and responsive way. It includes a Go API for data management.",
        longdescriptionen:
          "This personal portfolio project was designed to showcase my skills, experiences, and achievements in a professional and attractive manner. Developed with React for a dynamic user interface and Material-UI for a modern design, it offers smooth and responsive navigation across all devices. The Go API efficiently manages project data, ensuring optimal performance. This portfolio highlights my key projects, technical skills, and professional background, providing visitors with a comprehensive overview of my expertise in web development.",
        linkGithub: "https://github.com/sylvaintr/portfolio-react",
        linkWeb: "http://localhost:5173/",
      },
      {
        id: 2,
        name: "Poloko Ikastola",
        shortdescriptionfr: "Poloko Ikastola est une application de gestion d'une association d'une Ikastola (école basque). Elle permet de gérer des actulités, des événements, faire l'appel des élèves, génére les factures.",
        technologies: ["php", "javascript", "laravel", "SQL", "docker"],
        longdescriptionfr:
          "## Poloko IkastolaPoloko Ikastola est une application de gestion d'une Ikastola (école basque) visant à simplifier les tâches administratives et la communication entre enseignants, administrateurs et parents.\n\n### Fonctionnalités principales\n- Gestion des actualités et calendrier d'événements.\n- Module d'appel \n- Génération et export des factures.\n- Gestion des utilisateurs et des permissions (administrateur, enseignant, parent).\n\n### Architecture & technos\nBackend : PHP + Laravel  migrations et gestion des droits.\nFrontend : JavaScript avec templates et composants réutilisables.\nBase de données : SQL (optimisée pour requêtes courantes).\nEnvironnement : Docker Compose pour l'orchestration des services en dev/test.\n\n### Défis & solutions\n- Mise en place d'un modèle de permissions granulaires pour protéger les données élèves.\n- Automatisation des exports de factures .\n\n### Bénéfices\nLe système a réduit la charge administrative et centralisé les informations essentielles, facilitant le quotidien des équipes pédagogiques.",
        shortdescriptionen: "Poloko Ikastola is a management application for a Basque Ikastola (school). It allows managing activities, events, student attendance, and generating invoices.",
        longdescriptionen:
          "Poloko Ikastola is a management application for a Basque Ikastola (school). It allows managing activities, events, student attendance, and generating invoices. The application was developed using PHP with the Laravel framework for the backend, JavaScript for client-side interactions, and SQL for database management. Docker was used to facilitate deployment and environment management. Poloko Ikastola aims to simplify administrative tasks and improve communication within the association.",
        linkGithub: "https://github.com/sylvaintr/sae-ikastola-Poloko",
        linkWeb: "https://app.polokohiriondoikastola.eus",
      },
      {
        id: 3,
        name: "VHS Video Home Share",
        shortdescriptionfr:
          "VHS est une plateforme web interactive qui transforme le streaming solitaire en une expérience collective. En mélangeant nostalgie et technologie moderne, l'application recrée la convivialité des cinémas et des soirées télé d'autrefois.",
        technologies: ["php", "javascript", "twig", "SQL"],
        longdescriptionfr:
        "### VHS Video Home Share\nVHS Video Home Share est une plateforme de forme sur les film et série avec aussi les avis  quiz et  watchlist  collaborative qui permet à des utilisateurs distants de regarder des vidéos ensemble, en synchronisant la lecture et en proposant des interactions en temps réel.\n\n#### Fonctionnalités détaillées\n- Création et gestion de salles privées ou publiques avec code d'accès.\n- Synchronisation de la lecture (play/pause/seek) pour tous les participants.\n- Chat en temps réel et gestion des invitations.\n- Rôles et permissions (hôte, modérateur, participant).\n\n#### Implémentation technique\nLa solution combine une API classique pour la gestion des ressources et un canal temps réel  pour synchroniser les états de lecture entre clients. La persistance est assurée par une base SQL; des optimisations ciblées limitent la latence pour les commandes de contrôle.\n\n#### Perspectives d'amélioration\nAjout d'une authentification robuste, support de multiples sources vidéo, meilleure gestion adaptative de la qualité pour connexions lentes, et intégration d'un système de modération pour les salles publiques.\n\n_Lien du projet :_ https://sylvaintr.alwaysdata.net/vhs",
        shortdescriptionen:
        "VHS is an interactive web platform that transforms solitary streaming into a collective experience. By blending nostalgia with modern technology, the application recreates the conviviality of cinemas and old TV nights.",
        longdescriptionen:
        "VHS Video Home Share is an interactive web platform that transforms solitary streaming into a collective experience. By blending nostalgia with modern technology, the application recreates the conviviality of cinemas and old TV nights. Users can create virtual viewing rooms, invite friends, and synchronize video playback to share entertainment moments",
        linkWeb: "https://sylvaintr.alwaysdata.net/sae/SAE3.01/",
        linkGithub: "https://github.com/maximeBourciez/VideoHomeShare-Groupe5",
        
        
      },
    ],
  };