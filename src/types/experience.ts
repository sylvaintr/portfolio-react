import type { arrayApi } from "./types"

export type ExperienceFull = {
    id: number,
    title: string,
    company: string,
    descriptionFr: string,
    descriptionEn: string,
    dateS: string,
    dateE: string,
    type: string
    technologies?: string[];
}

export type Experiencecreate = {
    title: string,
    company: string,
    descriptionFr: string,
    descriptionEn: string,
    dateS: string,
    dateE: string,
    type: string
}

export type Experiences = arrayApi<ExperienceFull>;


export const ExperienceType = {
    JOB: "job",
    INTERNSHIP: "internship",
    VOLUNTEER: "volunteer",
    OTHER: "other"
} as const;

