import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            itemsLibrary: [],
            itemsMostHeaders: [],
            search: '',
            sideBar: {
                isCompressed: false,
                isModifiedByUser: false,
            },
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
                isAlreadyPlayed: false
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
            setCompressedValue: (state, { payload }) => {
                state.sideBar.isCompressed = payload;
            },
            setCompressedToggleByUser: (state) => {
                state.sideBar.isCompressed = !state.sideBar.isCompressed;
                state.sideBar.isModifiedByUser = true;
            },
            setContentActive: (state, { payload }) => {
                state.contentActive = payload;
                state.contentActive.activeIndex = 0;
                state.contentActive.isPlaying = true;
                state.playerSettings.isAlreadyPlayed = false
            },
            setPlayPause: (state) => {
                state.contentActive.isPlaying = !state.contentActive.isPlaying;
            },
            toggleShuffle: (state) => {
                state.playerSettings.isShuffle = !state.playerSettings.isShuffle;
            },
            setNextSong: (state) => {
                const nextSong = state.contentActive.activeIndex + 1;

                if (nextSong > (state.contentActive.listItems.length - 1)) {
                    if (state.playerSettings.isRepeat || (state.playerSettings.isRepeatOnce && !state.playerSettings.isAlreadyPlayed)) {
                        state.contentActive.activeIndex = 0;
                        if (state.playerSettings.isRepeatOnce) state.playerSettings.isAlreadyPlayed = true;
                    }
                    else state.contentActive = {
                        idContent: '',
                        trackOrderList: [],
                        activeIndex: null,
                        listItems: [],
                        isPlaying: false
                    }
                } else state.contentActive.activeIndex++;
            },
            setPreviousSong: (state) => {
                if (state.contentActive.activeIndex === 0)
                    if (state.playerSettings.isRepeat || state.playerSettings.isRepeatOnce)
                        state.contentActive.activeIndex = state.contentActive.listItems.length - 1;
                    else state.contentActive.activeIndex = 0;
                else state.contentActive.activeIndex--;
            },
            changePlayerMode: (state) => {
                if (!state.playerSettings.isRepeat && !state.playerSettings.isRepeatOnce) {
                    state.playerSettings.isRepeat = true;
                    state.playerSettings.isRepeatOnce = false;
                } else if (state.playerSettings.isRepeat && !state.playerSettings.isRepeatOnce) {
                    state.playerSettings.isRepeat = false;
                    state.playerSettings.isRepeatOnce = true;
                } else {
                    state.playerSettings.isRepeat = false;
                    state.playerSettings.isRepeatOnce = false;
                }
            },
            setNewListOrder: (state, { payload }) => {
                state.contentActive.trackOrderList = payload;
            },
        },
    });

export const {
    setLibrary,
    setMostHeaders,
    setSearch,
    setContentActive,
    setPlayPause,
    toggleShuffle,
    setNextSong,
    setPreviousSong,
    changePlayerMode,
    setNewListOrder,
    setCompressedValue,
    setCompressedToggleByUser,
} = spotifySlice.actions;