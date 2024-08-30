import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/index';
import { spotifySlice } from './spotify/spotifySlice';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        spotify: spotifySlice.reducer,
    }
});