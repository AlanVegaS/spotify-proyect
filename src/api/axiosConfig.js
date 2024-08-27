import axios from "axios";
import { getAuthToken } from "../store/auth";
import { store } from "../store/";

const spotifyApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': `Bearer ${store.getState().auth.tokenAuth}`
    }
});

spotifyApi.interceptors.response.use(
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

            await store.dispatch(getAuthToken());

            originalRequest.headers['Authorization'] = `Bearer ${store.getState().auth.tokenAuth}`;

            return spotifyApi(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default spotifyApi;