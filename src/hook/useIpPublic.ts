
import { useQuery } from '@tanstack/react-query';
import { fetchIpPublic } from '../api/ipPublic';


export function useIpPublic() {
    return useQuery({
        queryKey: ['ipPublic'],
        queryFn: () => fetchIpPublic(),
    })
}