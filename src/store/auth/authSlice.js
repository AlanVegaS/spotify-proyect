import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: localStorage.getItem('userName') && localStorage.getItem('tokenAuth') ? 'authenticated' : 'not-authenticated',//not-authenticated, authenticated
        userName: localStorage.getItem('userName') || null,
        tokenAuth: localStorage.getItem('tokenAuth') || null,
        uidUser: localStorage.getItem('uidUser') || null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.userName = payload.user;
            state.uidUser = payload.uidUser;
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.userName = null;
            state.tokenAuth = null;
            state.uidUser = null;
        },
        saveToken: (state, { payload }) => {
            state.tokenAuth = payload;
        }
    }
});

export const { login, logout, saveToken } = authSlice.actions;