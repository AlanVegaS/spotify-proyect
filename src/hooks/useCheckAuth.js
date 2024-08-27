import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/authSlice';
import { getAuthToken } from '../store/auth/';
import { getPlaylists } from '../store/spotify/';

export const useCheckAuth = () => {

    const { tokenAuth } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const userName = localStorage.getItem('userName');

    if (userName) {
        dispatch(login(userName));
        if(!tokenAuth) dispatch(getAuthToken());
        //dispatch(getPlaylists());
    }

    const { status } = useSelector((state) => state.auth);
    return status;
};