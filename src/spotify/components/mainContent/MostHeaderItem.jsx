import PropTypes from 'prop-types';
import { PlayPauseIcon } from './PlayPauseIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setContentActive } from '../../../store/spotify/spotifySlice';

export const MostHeaderItem = ({ img, name, id }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toContent = () => {
        navigate(`/playlist/${id}`);
    };

    const onPlayContent = (event) => {
        event.stopPropagation();

        const newContentActive = {
            idContent: id,
            idItem: null,
            currentNumber: null,
            listItems: null
        };
        dispatch(setContentActive(newContentActive));
    };

    return (
        <article className="h-12 lg:h-14 xl:h-20 flex justify-between cursor-pointer bg-l-traslucid-1 dark:bg-traslucid-1 hover:bg-l-traslucid-2 dark:hover:bg-traslucid-2 rounded-sm items-center group transition-colors duration-text text-l-text-primary dark:text-text-primary"
            onClick={toContent}
        >
            <div className="h-full flex items-center truncate"
            >
                <img className="h-full rounded-sm group-hover:shadow-cover transition-shadow duration-text" src={img} alt="cover" />
                <p className="font-bold ml-sm truncate">{name}</p>
            </div>
            <div className="h-full aspect-square rounded-full opacity-0 transition-opacity duration-text group-hover:opacity-100"
                onClick={onPlayContent}
            >
                <PlayPauseIcon id={id}></PlayPauseIcon>
            </div>
        </article>
    );
};

MostHeaderItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};