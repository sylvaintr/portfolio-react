
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createProjet, getProjet, getProjets, updateProjet } from '../assets/api/Projet';
import type { ProjetCreate } from '../types/projet';


export function useProjets(limit?: number, page?: number) {
    return useQuery({
        queryKey: ['projets', { limit, page }],
        queryFn: () => getProjets(limit, page),
    })
}

export function useProjet(id: string | undefined) {
    return useQuery({
        queryKey: ['projet', id],
        queryFn: () => getProjet(id ? parseInt(id) : 0),
        enabled: !!id,
    })
}

export default function useCreateProjet() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProjet: ProjetCreate) => createProjet(newProjet),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projets'] });
        },
        
    })
}

export function useEditProjet() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (projet: any) => updateProjet(projet),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projets'] });
        },
        
    })
}