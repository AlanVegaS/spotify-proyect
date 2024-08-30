import spotifyApi from '../../api/axiosConfig';
import { setMostHeaders, setLibrary } from './';

export const startLoadPlaylists = () => {
    return async (dispatch, getState) => {
        try {
            console.log('startLoadPlaylists');
            const resp = await spotifyApi().get('browse/featured-playlists?market=US&fields=playlists%28items%28name%2Ctype%2Cimages%29%29&limit=28');
            const playlists = resp.data.playlists.items;
            dispatch(setMostHeaders(playlists.slice(0, 8)));
            dispatch(setLibrary(playlists.slice(8, playlists.length - 1)));
        } catch (error) {
            console.log(`Request error:${error}`);
        }
    }
};