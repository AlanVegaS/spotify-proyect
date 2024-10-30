import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CurrentSong = () => {
    const { contentActive } = useSelector(state => state.spotify);
    
    const [content, setContent] = useState();

    useEffect(() => {
        if (contentActive.activeIndex) {
            const { img, name, info } = contentActive.listItems[contentActive.activeIndex];

            setContent({ img, name, info });
        }
    }, [contentActive]);

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