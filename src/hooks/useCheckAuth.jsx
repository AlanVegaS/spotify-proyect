import { useSelector } from 'react-redux';

export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);

    return status;
};