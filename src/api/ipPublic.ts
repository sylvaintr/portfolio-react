import axios from "axios";

export async function fetchIpPublic(): Promise<string> {
    const response = await axios.get<{ ip: string }>('https://api.ipify.org?format=json');
    return response.data.ip;
}