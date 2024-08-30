import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLogin } from '../store/auth/';
import { startLoadPlaylists } from '../store/spotify/';
import { useEffect } from 'react';

export const useCheckAuth = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const userName = localStorage.getItem('userName');

        if (userName) {
            dispatch(startLogin());
            dispatch(startLoadPlaylists());
        }
    }, []);

    const { status } = useSelector((state) => state.auth);
    return status;
};