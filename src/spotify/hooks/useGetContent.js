import PropTypes from 'prop-types';
import { useGetEpisodesShowsQuery, useGetTopTracksArtistQuery, useGetTracksPlaylistQuery } from '../../store/api';
import { formatDataEpisodes, formatDataTracksArtist, formatDataTracksPlaylist } from '../helpers/formatData';

const queryMapping = {
    artist: useGetTopTracksArtistQuery,
    playlist: useGetTracksPlaylistQuery,
    show: useGetEpisodesShowsQuery,
};

const formatMapping = {
    artist: formatDataTracksArtist,
    playlist: formatDataTracksPlaylist,
    show: formatDataEpisodes,
};

export const useGetContent = (typeContent, id) => {
    const { data } = queryMapping[typeContent](id);

    if (!data) return { contentList: null };

    const items = typeContent === 'artist' ? data.tracks : data.items;
    const contentList = formatMapping[typeContent](items);

    return { contentList };
};

useGetContent.PropTypes = {
    typeContet: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};