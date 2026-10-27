export const project = [
  {
    id: 1,
    title: "Kasa",
    description: "Application web de location de logement",
    tech: ["React"],
    title_1: "Contexte et objectif",
    article_1: ["Kasa me recrute en tant que développeuse front-end et me présente la maquette Figma du projet. Je dois mettre en place cette maquette en utilisant React et React router ainsi que Sass pour styliser l'application web."
    ],
    title_2: "Compétences développées",
    article_2: ["Kasa m'a fait découvrir React et React Router. J'en ai tiré les compétences suivantes : gestion de la navigation entre les pages via React Router, usage de Sass pour optimiser le CSS, utilisation des composants et des props pour créer une application web modulable." 
    ],
    title_3: "Perspective d'amélioration",
    article_3: ["Je dois améliorer mon usage des useState et useEffect pour mieux utiliser la puissance de React."
    ],
    repo : "https://github.com/Arminne2/Kasa",
    pictures_title: ["Composant drilldown",  "Fiche logement format desktop", "Fiche logement format mobile", "Tuile de logement en grille format desktop", "Tuile logement en colonne format mobile"],
    pictures: ["https://i.ibb.co/whWYbzNt/collapse-kasa.png" ,"https://i.ibb.co/5gX242by/fiche-logement-desktop.png", "https://i.ibb.co/nqgNKL5S/fiche-logement-mobile.png", "https://i.ibb.co/rRnRYkgf/grid-logement.png", "https://i.ibb.co/KjpvTbhZ/logement-mobile.png"]
  },
  {
    id: 2,
    title: "Portfolio Sophie Bluel",
    description: "Portfolio de l'architecte Sophie Bluel",
    tech: ["HTML", "CSS", "Javascript"],
    technologie_img: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/960px-Official_CSS_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    ],
    title_1: "Contexte et objectif",
    article_1: ["Je suis développeuse front-end pour l'agence ArchiWebos et je suis envoyée en renfort vers une autre équipe de l'entreprise pour mettre en place le Front d'un site. La maquette est déjà faite, il y a déjà une partie du code front-end et back-end. Je dois donc me concentrer sur des aspects spécifiques du site et non l'entiereté de celui ci : la page de connexion et déconnexion, la présentation des travaux, la modale permettant d'ajouter ou de retirer des projets."
    ],
    title_2: "Compétences développées",
    article_2: ["Le projet numéro 3, le Portfolio de Sophie Bluel m'a permis de mettre en place du javascript dans un projet frontend. J'ai également pu modifier des données via des appels à l'API swagger. Ce projet m'a également permis de voir les connexions et deconnexions et vérification de connexions utilisateurs via l'usage de tokens." 
    ],
    title_3: "Perspective d'amélioration",
    article_3: ["C'était le premier projet avec du javascript dedans et j'ai fais trop de fonctions qui appellent d'autres fonctions. Cela donne un code lourd, peu lisible et peu optimal. Mais cela m'a permis de voir les erreurs à ne pas commettre par la suite."
    ],
    repo : "https://github.com/Arminne2/Portfolio-architecte-sophie-buel",
    pictures_title: ["Page de login",  "Présentation des travaux avec filtre", "Mode édition", "Modale qui permet la suppression d'un projet", "Modale qui permet l'ajout d'un projet"],
    pictures: ["https://i.ibb.co/YMSL73C/login-page.png" ,"https://i.ibb.co/Zz629c2w/Filtre-tous.png", "https://i.ibb.co/Ps8BPvtR/mode-dition.png", "https://i.ibb.co/KzySmhyN/modal-suppr-ajout.png", "https://i.ibb.co/x8JXMMn1/ajout.png"]
  },
  {
    id: 3,
    title: "Booki",
    description: "Site d'agence de voyage",
    tech: ["HTML", "CSS"],
    technologie_img: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/960px-Official_CSS_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    ],
    title_1: "Contexte et objectif",
    article_1: ["Je suis en alternance au sein de la start-up Booki. Sarah, la CTO me demande d'intégrer les maquettes faites par Loïc, l'UI designer."
    ],
    title_2: "Compétences développées",
    article_2: ["Utilisation du responsive avec du mobile first; intégration conforme à une maquette fournie; utilisation de flexbox; utilisation de git et github pour le suivi de projet et le suivi des versions et branches."
    ],
    title_3: "Perspective d'amélioration",
    article_3: ["C'était mon premier projet et le CSS est mal ordonné, avec des répétitions. Je vois également certains padding ou margin imparfaits."
    ],
    repo : "https://github.com/Arminne2/booki-starter-code",
    pictures_title: ["Tuile activité",  "Header et recherche format desktop", "Header et recherche format mobile", "Tuile hébergements"],
    pictures: ["https://i.ibb.co/d4b6BWWm/cards-activit-s.png","https://i.ibb.co/9H9jNHZD/header-recherche-desktop.png", "https://i.ibb.co/zVnJMkwZ/header-recherche-mobile.png", "https://i.ibb.co/k2nKcX9K/tuiles-h-bergements.png"]
  },
];

export const getProjectById = (id) => {
  return project.find((project) => project.id === parseInt(id));
};

