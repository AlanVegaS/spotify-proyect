import axios from "axios";
import { getNewToken } from "../store/auth";
import { store } from "../store/";

const spotifyApi = () => {
    console.log('current token: ' + store.getState().auth.tokenAuth);

    const axiosConf = axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: {
            'Authorization': `Bearer ${store.getState().auth.tokenAuth}`
        }
    });

    axiosConf.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            console.log('error ' + error);
            const originalRequest = error.config;
            console.log('Token exp: ' + store.getState().auth.tokenAuth);

            if (error.response.status === 401 && !originalRequest._retry) {//expired token
                console.log('expired token');

                originalRequest._retry = true;
                const newToken = await getNewToken();
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return spotifyApi(originalRequest);
            }
            return Promise.reject(error);
        }
    );

    return axiosConf;

}

export default spotifyApi;