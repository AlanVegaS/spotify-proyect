import PropTypes from 'prop-types';
import { useGetEpisodesShowsQuery, useGetTracksPlaylistQuery } from '../../store/api';
import { formatDataEpisodes, formatDataTracksPlaylist } from '../helpers/formatData';

export const useGetContent = (typeContent, id) => {
    const queryMapping = {
        playlist: useGetTracksPlaylistQuery,
        show: useGetEpisodesShowsQuery,
    };
    const formatMapping = {
        playlist: formatDataTracksPlaylist,
        show: formatDataEpisodes,
    };

    const { data, isFetching } = queryMapping[typeContent](id);
    const contentInfo = formatMapping[typeContent](data, isFetching);
    return { id, ...contentInfo, isFetching };
};

useGetContent.PropTypes = {
    typeContet: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};