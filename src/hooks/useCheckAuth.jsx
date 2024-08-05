import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/authSlice';

export const useCheckAuth = () => {

    const dispatch = useDispatch();
    const userName = localStorage.getItem('userName');

    if (userName) dispatch(login(userName))

    const { status } = useSelector((state) => state.auth);

    return status;
};