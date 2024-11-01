import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CurrentSong = () => {
    const { activeIndex, listItems } = useSelector(state => state.spotify.contentActive);

    const [content, setContent] = useState();

    useEffect(() => {
        console.log(activeIndex, listItems);

        if (activeIndex || activeIndex === 0) {
            const { img, name, info } = listItems[activeIndex];
            setContent({ img, name, info });
        }
    }, [listItems, activeIndex]);

    return (
        <section className="h-full w-3/12 aspect-square flex p-sm gap-2 transition-all duration-500">
            {content && (
                <>
                    <img className="rounded-sm" src={content.img} alt="cover" />
                    <div className="flex-col content-center">
                        <p className="font-semibold text-sm">{content.name}</p>
                        <p className="font-light text-sm">{content.info}</p>
                    </div>
                </>
            )}
        </section>
    );
};