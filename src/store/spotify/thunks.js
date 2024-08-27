import spotifyApi from '../../api/axiosConfig';

export const getPlaylists = () => {
    return async (dispatch, getState) => {
        const resp = await spotifyApi.get('browse/featured-playlists');
        
        return resp.data.playlists
    };
};