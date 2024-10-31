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
                trackOrderList: [],
                activeIndex: null,
                listItems: [],
                isPlaying: false
            },
            playerSettings: {
                isShuffle: false,
                isRepeat: false,
                isRepeatOnce: false,
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
                state.contentActive.activeIndex = 1;
                state.contentActive.isPlaying = true;
            },
            setPlayPause: (state) => {
                state.contentActive.isPlaying = !state.contentActive.isPlaying;
            },
            toggleShuffle: (state) => {
                state.playerSettings.isShuffle = !state.playerSettings.isShuffle;
            },
        },
    });

export const { setLibrary, setMostHeaders, setSearch, setContentActive, setPlayPause, toggleShuffle } = spotifySlice.actions;