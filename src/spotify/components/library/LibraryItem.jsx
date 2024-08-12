import PropTypes from 'prop-types';

export const LibraryItem = ({ type, name, img }) => {
    return (
        <figure className="group flex p-sm duration-100 cursor-pointer hover:bg-hover-article active:bg-deep-black">
            <div className="w-figure h-figure relative">
                <img
                    className={`h-full w-full rounded-${type === 'Artist' ? 'base-field' : 'sm'}`}
                    src={img} alt="cover" />
                <div className={`hidden absolute top-0 bg-hover-shadow w-figure h-figure group-hover:flex items-center justify-center rounded-${type === 'Artist' ? 'base-field' : 'sm'}`}>
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-6 fill-white "><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                </div>
            </div>
            <div className="text-text-gray ml-3">
                <p className="font-bold">{name}</p>
                <p className="font-light">{type}</p>
            </div>
        </figure>
    );
};

LibraryItem.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}