import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            itemsLibrary: [],
            itemsMostHeaders: [],
            search: '',
            contentActive: {
                idContent: '',
                activeItem: {},
                activeIndex: null,
                listItems: [],
                isPlaying: false
            }
        },
        reducers: {
            setLibrary: (state, { payload }) => {
                state.itemsLibrary = payload;
            },
            setMostHeaders: (state, { payload }) => {
                state.itemsMostHeaders = payload;
            },
            setSearch: (state, { payload }) => {
                state.search = payload;
            },
            setContentActive: (state, { payload }) => {
                state.contentActive = payload;
                state.contentActive.activeItem = state.contentActive.listItems[state.contentActive.activeIndex];
                state.contentActive.isPlaying = true;
            },
            setPlayPause: (state) => {
                state.contentActive.isPlaying = !state.contentActive.isPlaying;
            },
        },
    });

export const { setLibrary, setMostHeaders, setSearch, setContentActive, setPlayPause } = spotifySlice.actions;