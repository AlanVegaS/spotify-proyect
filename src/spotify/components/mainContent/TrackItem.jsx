import PropTypes from "prop-types";

export const TrackItem = ({ id, img, name, info, duration }) => {
    return (
        <article key={id} className="grid grid-cols-table-content hover:bg-l-hover-card dark:hover:bg-hover-card rounded-sm items-center first:justify-items-center ml-sm">
            <div className="flex justify-center w-full">
                <svg aria-hidden="true" className="h-4" viewBox="0 0 24 24" ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
            </div>
            <div className="flex cursor-default">
                <img src={img} alt="" className="w-12 max-h-12 rounded-sm mr-sm my-sm" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="font-light">{info}</p>
                </div>
            </div>
            <p>{duration}</p>
        </article>
    );
};

TrackItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
};