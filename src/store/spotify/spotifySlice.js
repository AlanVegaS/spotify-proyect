import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice(
    {
        name: 'spotify',
        initialState: {
            currentSong: '',
            isPlaying: ''
        },
        reducers: {
            getPlaylist: (state, payload) => {

            }
        },
    });

export const { getPlaylist } = spotifySlice.actions;