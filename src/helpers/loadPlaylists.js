import spotifyApi from "../api/axiosConfig";

export const getPlaylists = async () => {
    const resp = await spotifyApi().get('browse/featured-playlists?market=US&fields=playlists%28items%28name%2Ctype%2Cimages%29%29&limit=28');

    return await resp.data.playlists.items;
};