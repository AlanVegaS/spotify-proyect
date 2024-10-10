import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PlayPauseIcon } from './PlayPauseIcon';

export const MostHeaderItem = ({ img, name, id }) => {

    return (
        <Link to={`/playlist/${id}`}>
            <article className="h-12 lg:h-14 xl:h-20 flex justify-between cursor-pointer bg-l-traslucid-1 dark:bg-traslucid-1 hover:bg-l-traslucid-2 dark:hover:bg-traslucid-2 rounded-sm items-center group transition-colors duration-text text-l-text-primary dark:text-text-primary">
                <div className="h-full flex items-center truncate">
                    <img className="h-full rounded-sm group-hover:shadow-cover transition-shadow duration-text" src={img} alt="cover" />
                    <p className="font-bold ml-sm truncate">{name}</p>
                </div>
                <div className="h-full aspect-square m-sm opacity-0 transition-opacity duration-text group-hover:opacity-100">
                    <PlayPauseIcon isActive={false}></PlayPauseIcon>
                </div>
            </article>
        </Link>
    );
};

MostHeaderItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};