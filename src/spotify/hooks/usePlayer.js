import { useDispatch, useSelector } from "react-redux";
import { setContentActive } from "../../store/spotify/spotifySlice";

export const usePlayer = () => {
    const dispatch = useDispatch();
    const { shuffle, repeat, repeatOnce } = useSelector((state) => state.spotify.playerSettings);

    const startPlay = (idContent, listItems) => {
        const trackOrderList = []
        dispatch(setContentActive({
            idContent,
            listItems,
            trackOrderList,
        }));
    };

    return { startPlay }
};