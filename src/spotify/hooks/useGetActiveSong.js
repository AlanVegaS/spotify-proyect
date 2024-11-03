import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetActiveSong = () => {
    const { activeIndex, listItems, trackOrderList } = useSelector(state => state.spotify.contentActive);
    const [activeSong, setActiveSong] = useState();

    useEffect(() => {
        if (activeIndex || activeIndex === 0) {
            const currentIndex = trackOrderList[activeIndex]
            const { id, img, name, info } = listItems[currentIndex];
            setActiveSong({ id, img, name, info });
        } else setActiveSong(null);
    }, [listItems, activeIndex, trackOrderList]);

    return { activeSong };
}
