import PropTypes from 'prop-types';

export const MostHeaderItem = ({ img, name }) => {
    return (
        <article className="h-20 flex justify-between bg-traslucid-1 rounded-sm items-center group hover:bg-traslucid-2">
            <div className="h-full flex items-center">
                <img className="h-full rounded-sm group-hover:shadow-cover transition-shadow duration-text" src={img} alt="cover" />
                <p className="font-bold ml-sm">{name}</p>
            </div>
            <div className="h-3/4 aspect-square m-sm p-md bg-base-green rounded-full opacity-0 transition-opacity duration-text group-hover:opacity-100 hover:scale-102 shadow-play">
                <svg role="img" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
            </div>
        </article>
    );
};

MostHeaderItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}