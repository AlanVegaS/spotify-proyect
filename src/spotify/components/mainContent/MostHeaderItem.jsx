import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MostHeaderItem = ({ img, name, id }) => {

    return (
        <Link to={`/playlist/${id}`}>
            <article className="h-12 lg:h-14 xl:h-20 flex justify-between cursor-pointer bg-l-traslucid-1 dark:bg-traslucid-1 hover:bg-l-traslucid-2 dark:hover:bg-traslucid-2 rounded-sm items-center group transition-all duration-500 text-l-text-primary dark:text-text-primary">
                <div className="h-full flex items-center truncate">
                    <img className="h-full rounded-sm group-hover:shadow-cover transition-shadow duration-text" src={img} alt="cover" />
                    <p className="font-bold ml-sm truncate">{name}</p>
                </div>
                <div className="h-3/4 flex items-center justify-center aspect-square m-sm bg-base-green rounded-full opacity-0 shadow-play transition-all duration-100 group-hover:opacity-100 hover:scale-102">
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                </div>
            </article>
        </Link>
    );
};

MostHeaderItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}