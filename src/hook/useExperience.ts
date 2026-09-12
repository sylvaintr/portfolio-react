import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


import { createExperience, deleteExperience, getExperience, getExperiences } from '../api/experience';
import type { Experiencecreate } from '../types/experience';

export function useExperiences() {
    return useQuery({
        queryKey: ['experiences'],
        queryFn: () => getExperiences(),
    })
}

export function useExperience(id: number | undefined) {
    return useQuery({
        queryKey: ['experience', id],
        queryFn: () => getExperience(id!),
        enabled: !!id,
    })
}

export default function useCreateExperience() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newExperience: Experiencecreate) => createExperience(newExperience),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['experiences'] });
        },

    })
}

export function useDeleteExperience() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => deleteExperience(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['experiences'] });
        },

    })
}