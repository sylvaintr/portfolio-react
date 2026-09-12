import axios from "axios";
import type { ProjetCreate, ProjetEdit, Projetfull, Projets, Projetshort } from "../types/projet";


export async function getProjets(limit?: number, page?: number): Promise<Projets> {
    const url = import.meta.env.VITE_API_URL + "/projets";
    const response = await axios.get(url, {
        params: {
            nb: limit,
            page: page,
        },
    });

    // Normalise la réponse de l'API pour exposer la forme { data, count }.
    // Accepte { data, count }, { projets, count } ou un simple tableau.
    const body = response.data;
    if (body && Array.isArray(body.data)) {
        return body as Projets;
    }
    if (body && Array.isArray(body.projets)) {
        return { data: body.projets, count: body.count ?? body.projets.length };
    }
    return {
        data: Array.isArray(body) ? body : [],
        count: Array.isArray(body) ? body.length : 0,
    };
}

export async function getProjet(id: number): Promise<Projetfull> {
    const url = import.meta.env.VITE_API_URL + "/projet/" + id;
    const projet = await axios.get(url);
    return projet.data;
}

export async function createProjet(projet: ProjetCreate): Promise<Projetshort> {
    const url = import.meta.env.VITE_API_URL + "/projets";
    const newprojet = await axios.post(url, projet);
    return newprojet.data;
}

export async function deleteProjet(id: number): Promise<void> {
    const url = import.meta.env.VITE_API_URL + "/projet/" + id;
    await axios.delete(url);
}

export async function updateProjet(projet: ProjetEdit): Promise<Projetfull> {
    const url = import.meta.env.VITE_API_URL + "/projet/" + projet.id;
    const updatedprojet = await axios.put(url, projet);
    return updatedprojet.data;
}
