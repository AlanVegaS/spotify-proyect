import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            isPlaying: '',
            itemsLibrary: [],
            itemsMostHeaders: [],
            search: ''
        },
        reducers: {
            setLibrary: (state, { payload }) => {
                state.itemsLibrary = payload;
            },
            setMostHeaders: (state, { payload }) => {
                state.itemsMostHeaders = payload;
            },
            setSearch: (state, {payload}) => {
                state.search = payload;
            }
        },
    });

export const { setLibrary, setMostHeaders, setSearch } = spotifySlice.actions;