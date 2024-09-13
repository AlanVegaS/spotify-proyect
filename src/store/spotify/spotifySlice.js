import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            isPlaying: '',
            contentShowed: {},
            itemsLibrary: [],
            itemsMostHeaders: [],
        },
        reducers: {
            setContentShowed: (state, { payload }) => {
                state.contentShowed = {
                    contentType: payload.contentType,
                    name: payload.name,
                    info: payload.info
                }
            },
            setLibrary: (state, { payload }) => {
                state.itemsLibrary = payload;
            },
            setMostHeaders: (state, { payload }) => {
                state.itemsMostHeaders = payload;
            },
        },
    });

export const { setLibrary, setMostHeaders } = spotifySlice.actions;