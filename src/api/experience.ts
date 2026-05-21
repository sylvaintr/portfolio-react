import axios from "axios";
import type { Experiencecreate, Experiences } from "../types/experience";


export async function getExperiences(): Promise<Experiences> {
    const url = import.meta.env.VITE_API_URL + "/experiences";
    const experiences = await axios.get(url);
    return experiences.data;
}

export async function getExperience(id: number): Promise<Experiencecreate> {
    const url = import.meta.env.VITE_API_URL + "/experience/" + id;
    const experience = await axios.get(url);
    return experience.data;
}

export async function createExperience(experience: Experiencecreate): Promise<Experiencecreate> {
    const url = import.meta.env.VITE_API_URL + "/experiences";
    const newexperience = await axios.post(url, experience);
    return newexperience.data;
}

export async function deleteExperience(id: number): Promise<void> {
    const url = import.meta.env.VITE_API_URL + "/experience/" + id;
    await axios.delete(url);
}   