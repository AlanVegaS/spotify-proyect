import { login, saveToken } from './';
import { getNewToken } from '../../auth/helpers/getNewToken';

export const startLogin = (user) => {
    console.log('start login');
    return async (dispatch, getState) => {
        dispatch(login(user));
        const tokenAuth = getNewToken();
        dispatch(saveToken(tokenAuth));
        localStorage.setItem('tokenAuth', tokenAuth);
    };
};