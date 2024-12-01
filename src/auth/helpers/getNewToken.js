import axios from "axios";

export const getNewToken = async () => {
    const response = await axios.get('http://localhost:8888/.netlify/functions/index/auth/spotify/token');
    const newToken = await response.data.access_token;

    return newToken;
};