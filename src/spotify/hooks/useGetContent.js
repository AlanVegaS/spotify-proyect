import PropTypes from 'prop-types';
import { useGetEpisodesShowsQuery, useGetTopTracksArtistQuery, useGetTracksPlaylistQuery } from '../../store/api';

const queries = {
    artist: useGetTopTracksArtistQuery,
    playlist: useGetTracksPlaylistQuery,
    show: useGetEpisodesShowsQuery
};

const formatDataEpisodes = (items) => {
    return items.map(item => ({
        audio: item.audio_preview_url,
        name: item.name,
        img: item.images?.[3] ? item.images[3].url : item.images?.[0]?.url,
        duration: item.duration_ms / 60,
        info: item.type
    }))
};

const formatDataTracksArtist = (items) => {
    /*return items.map(item => ({
        audio: item.audio_preview_url,
        name: item.name,
        img: item.images?.[3] ? item.images[3].url : item.images?.[0]?.url,
        duration: item.duration_ms / 60,
        info: item.type
    }))*/
};

const formatDataTracksPlaylist = (items) => {
    /*return items.map(item => ({
        audio: item.audio_preview_url,
        name: item.name,
        img: item.images?.[3] ? item.images[3].url : item.images?.[0]?.url,
        duration: item.duration_ms / 60,
        info: item.type
    }))*/
};

export const useGetContent = (typeContet, id) => {
    const { data: contentList } = queries[typeContet](id);
    console.log(contentList);

    if (typeContet === 'show' && contentList && contentList.items) {
        console.log(formatDataEpisodes(contentList.items));
    }

    return { contentList };
};

useGetContent.PropTypes = {
    typeContet: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};