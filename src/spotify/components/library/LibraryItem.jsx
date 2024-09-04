import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LibraryItem = ({ type, name, img, id }) => {
    return (
        <Link to={`/playlist/${id}`}>
            <figure className="group flex p-sm mx-sm rounded-sm duration-100 cursor-pointer hover:bg-l-hover-card dark:hover:bg-hover-card active:bg-l-base-primary dark:active:bg-base-primary">
                <div className="h-figure aspect-square relative">
                    <img
                        className={`h-full shadow-cover dark:shadow-play rounded-${type === 'Artist' ? 'base-field' : 'sm'}`}
                        src={img} alt="cover" />
                    <div className={`hidden absolute top-0 bg-hover-shadow w-figure h-figure group-hover:flex items-center justify-center rounded-${type === 'Artist' ? 'base-field' : 'sm'}`}>
                        <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-6 fill-white "><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                    </div>
                </div>
                <div className="text-l-text-primary dark:text-text-primary ml-3 truncate">
                    <p className="font-bold truncate">{name}</p>
                    <p className="font-light">{type}</p>
                </div>
            </figure>
        </Link>
    );
};

LibraryItem.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}