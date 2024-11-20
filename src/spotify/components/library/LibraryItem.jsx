import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { PlayPauseIcon } from '../mainContent';
import { useSelector } from 'react-redux';

export const LibraryItem = ({ type, name, img, id }) => {
    const navigate = useNavigate();
    const { idContent, isPlaying } = useSelector((state) => state.spotify.contentActive);
    const { isCompressed } = useSelector(state => state.spotify.sideBar);
    const thisIsActive = idContent === id;
    const toContent = () => {
        navigate(`/playlist/${id}`);
    };
    return (
        <motion.figure className="group flex p-sm mx-sm rounded-sm duration-100 cursor-pointer hover:bg-l-hover-card dark:hover:bg-hover-card active:bg-l-base-primary dark:active:bg-base-primary"
            animate={{ opacity: 1 }}
            transition={{
                duration: .5
            }}
            onClick={toContent}
        >
            <div className="h-figure aspect-square relative">
                <img className={`h-full shadow-cover dark:shadow-play rounded-${type === 'Artist' ? 'base-field' : 'sm'}`} src={img} alt="cover" />
                <div className={`hidden absolute top-0 bg-hover-shadow w-figure h-figure group-hover:flex items-center justify-center rounded-${type === 'Artist' ? 'base-field' : 'sm'}`}>
                    <div className="h-14 flex" onClick={(event) => event.stopPropagation()}>
                        <PlayPauseIcon id={id} type="playlist" isAlternativeIcon={true}></PlayPauseIcon>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full text-l-text-primary dark:text-text-primary ml-3 truncate">
                {
                    !isCompressed &&
                    <div className='w-11/12'>
                        <p className={`${thisIsActive && 'text-text-green'} font-bold truncate`}>{name}</p>
                        <p className="font-light">{type}</p>
                    </div>
                }
                <div className="flex justify-center h-4">
                    {
                        thisIsActive && isPlaying
                        && <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif" alt="" />
                    }
                </div>
            </div>
        </motion.figure>
    );
};

LibraryItem.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}