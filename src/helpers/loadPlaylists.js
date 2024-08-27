import spotifyApi from "../api/axiosConfig";

export const getPlaylists = async () => {
    const resp = await spotifyApi.get('browse/featured-playlists');

    

    return await resp.data.playlists.items;
};