import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/index';
import { spotifySlice } from './spotify/spotifySlice';
import { spotifyApi } from './api';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        spotify: spotifySlice.reducer,

        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});