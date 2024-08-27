import axios from "axios";
import { saveToken } from './';

export const getAuthToken = () => {
    return async (dispatch, getState) => {
        const resp = await axios.get('https://auth-spotify.netlify.app/.netlify/functions/index/auth/spotify/token');
        console.log('token: ' + resp.data.access_token);
        
        dispatch(saveToken(resp.data.access_token))
    };
};