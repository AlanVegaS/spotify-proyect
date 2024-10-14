import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PlayPauseIcon } from './PlayPauseIcon';
import { useDispatch } from 'react-redux';
import { setContentActive } from '../../../store/spotify/spotifySlice';

export const ContentCard = ({ images, name, description, type, id }) => {

    const descriptionItem = type === 'artist' ? 'Artist' : description;
    const urlImg = images[1]?.url === true ? images[1].url : images[0]?.url

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toContent = () => {
        navigate(`/${type}/${id}`);
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
        <article className="p-sm rounded-md cursor-pointer group hover:bg-l-traslucid-5 dark:hover:bg-l-traslucid-2 active:bg-l-traslucid-1 dark:active:bg-traslucid-5 transition-all duration-500"
            onClick={toContent}
        >
            <div className="relative">
                <img className={`aspect-square shadow-cover dark:shadow-play ${type === 'artist' ? 'rounded-full' : 'rounded-md'}`} src={urlImg} alt="cover" />
                <div className="absolute -bottom-2 right-0 h-16 aspect-square m-sm 
                opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-150"
                    onClick={onPlayContent}
                >
                    <PlayPauseIcon id={id}></PlayPauseIcon>
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
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
}