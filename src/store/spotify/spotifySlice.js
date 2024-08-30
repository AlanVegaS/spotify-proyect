import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            isPlaying: '',
            itemsLibrary: [],
            itemsMostHeaders: [],
        },
        reducers: {
            setLibrary: (state, { payload }) => {
                state.itemsLibrary = payload;
            },
            setMostHeaders: (state, { payload }) => {
                state.itemsMostHeaders = payload;
            },
        },
    });

export const { setLibrary, setMostHeaders } = spotifySlice.actions;