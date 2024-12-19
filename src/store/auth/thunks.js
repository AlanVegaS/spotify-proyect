import { login, saveToken, logout } from './';
import { createUser, getNewToken } from '../../auth/helpers/authApi';

export const startLogin = (user) => {
    console.log('start login');
    return async (dispatch, getState) => {
        const uidUser = await createUser(user);
        dispatch(login({ user, uidUser }));
        const tokenAuth = await getNewToken({ user, uidUser });
        dispatch(saveToken(tokenAuth));

        localStorage.setItem('userName', user);
        localStorage.setItem('tokenAuth', tokenAuth);
        localStorage.setItem('uidUser', uidUser);
    };
};

export const startLogout = () => {
    console.log('start login');
    return async (dispatch, getState) => {
        localStorage.removeItem('userName');
        localStorage.removeItem('tokenAuth');
        localStorage.removeItem('uidUser');
        dispatch(logout());
    };
};