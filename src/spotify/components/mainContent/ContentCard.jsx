import PropTypes from 'prop-types';

export const ContentCard = ({ images, name, description, type }) => {

    const descriptionItem = type === 'artist' ? 'Artist' : description;
    const urlImg = images[1]?.url === true ? images[1].url : images[0]?.url

    return (
        <article className="p-sm rounded-md cursor-pointer group hover:bg-l-traslucid-5 dark:hover:bg-l-traslucid-2 active:bg-l-traslucid-1 dark:active:bg-traslucid-5 transition-all duration-500">
            <div className="relative">
                <img className={`aspect-square shadow-cover dark:shadow-play ${type === 'artist' ? 'rounded-full' : 'rounded-md'}`} src={urlImg} alt="cover" />
                <div className="absolute -bottom-2 right-0 h-12 flex items-center justify-center aspect-square m-sm bg-base-green rounded-full shadow-play 
                opacity-0 group-hover:opacity-100 hover:scale-102 group-hover:-translate-y-2 duration-150 ease-in-out  transform ">
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                </div>
            </div>
            <div className='h-24 truncate overflow-hidden'>
                <p className="font-semibold mt-2 line-clamp-2 whitespace-normal overflow-hidden">{name}</p>
                <p className="font-light whitespace-normal text-ellipsis line-clamp-2">{descriptionItem}</p>
            </div>
        </article>
    );
};

ContentCard.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
}