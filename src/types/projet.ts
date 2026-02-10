

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


// shema 

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