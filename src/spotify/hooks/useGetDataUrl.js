import { useLocation } from "react-router-dom";

export const useGetDataUrl = () => {
    const { pathname } = useLocation();
    const segments = pathname.slice(1).split('/');
    const entity = segments[0];

    if (segments.length === 1) return { entity, ID: null };
    const ID = segments[1];

    return { entity, ID };
};