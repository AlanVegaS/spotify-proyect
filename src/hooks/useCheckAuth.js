import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLogin } from '../store/auth/';
import { useEffect } from 'react';

export const useCheckAuth = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const userName = localStorage.getItem('userName');

        if (userName) {
            dispatch(startLogin(userName));
        }
    }, []);

    const { status } = useSelector((state) => state.auth);
    return status;
};