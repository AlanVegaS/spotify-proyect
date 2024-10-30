import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetContent } from "../../hooks";
import { setContentActive, setPlayPause } from '../../../store/spotify';

export const PlayPauseIcon = ({ id, type: typeContent, isAlternativeIcon, contentLoaded }) => {//id from parent content
    const { idContent, isPlaying } = useSelector((state) => state.spotify.contentActive);
    const [isThisActive, setIsThisActive] = useState(idContent === id);
    const [isThisPlaying, setIsThisPlaying] = useState(isPlaying && id === idContent);
    const { content, isFetching, getContentInfo } = useGetContent(typeContent, id);
    const dispatch = useDispatch();

    const togglePlayPause = () => {
        if (!isThisPlaying) {
            setIsThisPlaying(true);
            dispatch(setPlayPause());
            if (!isThisActive) {
                if (!contentLoaded) getContentInfo(typeContent, id);
                else dispatch(setContentActive({
                    idContent: contentLoaded.id,
                    listItems: contentLoaded.contentList,
                }));
            }
        }
        else {
            setIsThisPlaying(false);
            dispatch(setPlayPause());
        }
    };

    useEffect(() => {
        if (content && !isFetching) {
            dispatch(setContentActive({
                idContent: content.id,
                listItems: content.contentList,
            }));
        }
    }, [content, dispatch, isFetching]);

    useEffect(() => {
        setIsThisActive(idContent === id);
        if (idContent !== id) setIsThisPlaying(false);
    }, [id, idContent, isThisActive])

    const buttonStyle = !isAlternativeIcon && 'bg-base-green shadow-play';
    return (
        <motion.div className={`flex items-center justify-center aspect-square m-sm rounded-full cursor-pointer ${buttonStyle}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 400, damping: 17 }}
            onClick={togglePlayPause}
        >
            {
                isThisPlaying
                    ? <svg role="img" aria-hidden="true" viewBox="0 0 16 17" className={`h-1/2 w-5 ${isAlternativeIcon && 'fill-text-primary'}`}>
                        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                    </svg>
                    : <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className={`h-1/2 w-5 ${isAlternativeIcon && 'fill-text-primary'}`}>
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
            }

        </motion.div>
    );
};

PlayPauseIcon.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isAlternativeIcon: PropTypes.bool,
    contentLoaded: PropTypes.object,
};