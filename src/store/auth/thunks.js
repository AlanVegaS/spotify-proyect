import axios from "axios";
import { login, saveToken } from './';

export const startLogin = () => {
    console.log('start login');
    return async (dispatch, getState) => {
        try {
            const userName = localStorage.getItem('userName');
            if (userName) {
                dispatch(login(userName));

                const tokenAuth = localStorage.getItem('tokenAuth');
                if (!tokenAuth) {
                    const token = await getNewToken();
                    dispatch(saveToken(token));
                } else {
                    dispatch(saveToken(tokenAuth));
                }
            }
        } catch (error) {
            console.log('Error in login');
        }
    };
};

export const getNewToken = async () => {
    console.log('getToken');
    const resp = await axios.get('https://auth-spotify.netlify.app/.netlify/functions/index/auth/spotify/token');
    console.log('New token: ' + resp.data.access_token);
    localStorage.setItem('tokenAuth', resp.data.access_token);
    return resp.data.access_token
};