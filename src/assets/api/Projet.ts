import axios from "axios";
import type { ProjetCreate, Projetfull, Projets, Projetshort } from "../../types/projet";


export async function getProjets(limit?: number, page?: number): Promise<Projets> {
    const url = import.meta.env.VITE_API_URL + "/projets";
    const projets = await axios.get(url, {
        params: {
            nb: limit,
            page: page,
        },
    });
    return projets.data;
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

export async function updateProjet(projet: Projetshort): Promise<Projetshort> {
    const url = import.meta.env.VITE_API_URL + "/projet/" + projet.id;
    const updatedprojet = await axios.put(url, projet);
    return updatedprojet.data;
}
