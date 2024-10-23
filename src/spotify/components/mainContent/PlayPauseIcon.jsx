import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useGetContent } from "../../hooks";

export const PlayPauseIcon = ({ id, type: typeContent }) => {//id from parent content

    const { isPlaying, idContent } = useSelector((state) => state.spotify.contentActive);
    let isActive = (idContent === id) && isPlaying;
    const { getContentInfo } = useGetContent(typeContent, id);

    const togglePlayPause = () => {
        const resp = getContentInfo(typeContent, id);
        console.log('====================================');
        console.log(resp);
        console.log('====================================');
    };

    return (
        <motion.div className="flex items-center justify-center aspect-square m-sm bg-base-green rounded-full shadow-play cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 400, damping: 17 }}
            onClick={togglePlayPause}
        >
            {
                isActive
                    ? <svg role="img" aria-hidden="true" viewBox="0 0 16 17" className='h-1/2 w-5'>
                        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                    </svg>
                    : <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
            }
        </motion.div>
    );
};

PlayPauseIcon.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};