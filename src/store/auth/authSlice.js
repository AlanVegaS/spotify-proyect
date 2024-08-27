import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//not-authenticated, authenticated
        userName: null,
        tokenAuth: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.userName = payload;
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.userName = null;
        },
        saveToken: (state, { payload }) => {
            state.tokenAuth = payload;
        }
    }
});

export const { login, logout, saveToken } = authSlice.actions;