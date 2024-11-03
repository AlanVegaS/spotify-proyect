import { useDispatch, useSelector } from "react-redux";
import { setContentActive } from "../../store/spotify/spotifySlice";

export const usePlayer = () => {
    const dispatch = useDispatch();
    const { isShuffle } = useSelector((state) => state.spotify.playerSettings);


    const startPlay = (idContent, listItems) => {
        dispatch(setContentActive({
            idContent,
            trackOrderList: getOrderList(listItems, isShuffle),
            listItems,
        }));
    };

    const getOrderList = (listItems, isShuffle) => {
        let orderList = listItems.map((_, index) => index);
        let shuffledList  = [];

        if (!isShuffle) return orderList;

        while (orderList.length) {
            const indexRandom = Math.floor(Math.random() * orderList.length);
            shuffledList.push(orderList.splice(indexRandom, 1)[0]);
        }
        return shuffledList ;
    };

    return { startPlay, getOrderList }
};