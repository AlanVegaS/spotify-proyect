import PropTypes from 'prop-types';
import { useGetEpisodesShowsQuery, useGetTracksPlaylistQuery } from '../../store/api';
import { formatDataEpisodes, formatDataTracksArtist, formatDataTracksPlaylist } from '../helpers/formatData';
import { useGetArtistInfo } from '../hooks';

export const useGetContent = (typeContent, id) => {
    //console.log(`info ${typeContent} ID ${id}`);
    const queryMapping = {
        artist: useGetArtistInfo,
        playlist: useGetTracksPlaylistQuery,
        show: useGetEpisodesShowsQuery,
    };
    const formatMapping = {
        artist: formatDataTracksArtist,
        playlist: formatDataTracksPlaylist,
        show: formatDataEpisodes,
    };

    const { data } = queryMapping[typeContent](id);

    if (!data) return { contentList: null };
    //console.log(data);
    const contentInfo = formatMapping[typeContent](data);

    return contentInfo;
};

useGetContent.PropTypes = {
    typeContet: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};