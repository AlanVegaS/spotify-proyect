import PropTypes from 'prop-types';
import { PlayPauseIcon } from './PlayPauseIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MostHeaderItem = ({ img, name, id, type }) => {
    const { idContent, isPlaying } = useSelector((state) => state.spotify.contentActive);
    const isThisActive = id === idContent && isPlaying;
    const navigate = useNavigate();
    const toContent = () => {
        navigate(`/playlist/${id}`);
    };

    return (
        <article className="relative h-12 lg:h-14 xl:h-20 flex justify-between cursor-pointer z-0 bg-l-traslucid-1 dark:bg-traslucid-1 hover:bg-l-traslucid-2 dark:hover:bg-traslucid-2 rounded-sm items-center group transition-colors duration-text text-l-text-primary dark:text-text-primary"
            onClick={toContent}
        >
            <div className="h-full flex items-center truncate"
            >
                <img className="h-full aspect-square rounded-sm group-hover:shadow-cover transition-shadow duration-text" src={img} alt="cover" />
                <p className="font-bold ml-sm truncate">{name}</p>
            </div>
            {
                isThisActive &&
                <div className='absolute right-4 -z-10'>
                    <img className='h-4' src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif" alt="" />
                </div>
            }
            <div className="h-full aspect-square rounded-full opacity-0 transition-opacity duration-text group-hover:opacity-100"
                onClick={(event) => event.stopPropagation()}
            >
                <PlayPauseIcon id={id} type={type}></PlayPauseIcon>
            </div>
        </article>
    );
};

MostHeaderItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};