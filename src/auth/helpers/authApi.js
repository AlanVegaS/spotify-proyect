import { spotifyApi } from '../../api/axiosConfig';

const getNewToken = async (userData) => {
    const response = await spotifyApi.post('.netlify/functions/index/auth/spotify/token');
    const newToken = await response.data.access_token;

    spotifyApi.post('.netlify/functions/index/create/tokenRequest', { userData });

    return newToken;
};

const createUser = async (user) => {
    const response = await spotifyApi.post('.netlify/functions/index/create/user', { user });
    return response.data.uidUser;
};

export { getNewToken, createUser };