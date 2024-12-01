import axios from "axios";

export const getNewToken = async () => {
    const response = await axios.post('https://auth-spotify.netlify.app/.netlify/functions/index/auth/spotify/token');
    const newToken = await response.data.access_token;

    return newToken;
};