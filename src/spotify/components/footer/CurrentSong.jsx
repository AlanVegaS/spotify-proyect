import { useSelector } from "react-redux";
import { useGetActiveSong } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const CurrentSong = () => {
    const { activeSong: content } = useGetActiveSong();
    const { phoneMode, contentActive } = useSelector(state => state.spotify);
    const { idContent, typeContent} = contentActive;
    const navigate = useNavigate();

    return (
        <section className="h-full w-3/12 aspect-square flex p-sm gap-2 transition-all duration-500">
            {content && (
                <>
                    <img className="rounded-sm cursor-pointer" src={content.img} alt="cover" 
                    onClick={()=>navigate(`${typeContent}/${idContent}`)}
                    />
                    {
                        !phoneMode &&
                        <div className="flex-col content-center">
                            <p className="font-semibold text-sm">{content.name}</p>
                            <p className="font-light text-sm">{content.info}</p>
                        </div>
                    }
                </>
            )}
        </section>
    );
};