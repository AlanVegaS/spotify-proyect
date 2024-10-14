import { useDispatch } from "react-redux";
import { setContentActive } from "../../store/spotify/spotifySlice";
import PropTypes from 'prop-types';

export const usePlayContent = (id) => {

    const dispatch = useDispatch();

    if (id) {
        console.log(id);
        
        const newContentActive = {
            idContent: id,
            idItem: null,
            currentNumber: null,
            listItems: null
        };
        dispatch(setContentActive(newContentActive));
        return null;
    }
};

usePlayContent.propTypes = {
    id: PropTypes.string,
};