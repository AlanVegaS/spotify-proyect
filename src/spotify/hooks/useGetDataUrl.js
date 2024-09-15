import { useLocation } from "react-router-dom";

export const useGetDataUrl = () => {
    const { pathname } = useLocation();
    const segments = pathname.split('/');
    const entity = segments[1];
    const ID = segments[2];

    return { entity, ID }
};