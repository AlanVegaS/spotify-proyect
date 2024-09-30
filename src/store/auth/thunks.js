import { login, saveToken } from './';
import { getNewToken } from '../../auth/helpers/getNewToken';

export const startLogin = (user) => {
    console.log('start login');
    return async (dispatch, getState) => {
        dispatch(login(user));
        localStorage.setItem('userName', user);
        const tokenAuth = await getNewToken();
        dispatch(saveToken(tokenAuth));
        localStorage.setItem('tokenAuth', tokenAuth);
    };
};