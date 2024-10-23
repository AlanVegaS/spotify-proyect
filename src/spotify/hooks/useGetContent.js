import PropTypes from 'prop-types';
import { useGetEpisodesShowsQuery, useGetInfoArtistQuery, useGetTopTracksArtistQuery, useGetTracksPlaylistQuery } from '../../store/api';
import { formatDataEpisodes, formatDataTracksArtist, formatDataArtistInfo, formatDataTracksPlaylist } from '../helpers/formatData';

export const useGetContent = (typeContent, id) => {
    const isArtist = typeContent === 'artist';
    const { data: dataArtist, isFetching: isFetchingArtist } = useGetInfoArtistQuery(id, { skip: !isArtist });

    const getContentInfo = (typeContent, id) => {

        const queryMapping = {
            playlist: useGetTracksPlaylistQuery,
            show: useGetEpisodesShowsQuery,
            artist: useGetTopTracksArtistQuery,
        };
        const formatMapping = {
            playlist: formatDataTracksPlaylist,
            show: formatDataEpisodes,
            artist: formatDataTracksArtist,
        };
        console.log('====================================');
        console.log(queryMapping[typeContent]);
        console.log('====================================');
        const { data: dataContent, isFetching: isFetchingContent } = queryMapping[typeContent](id);
        const isFetching = isArtist ? (isFetchingArtist || isFetchingContent) : isFetchingContent;
        let contentInfo = formatMapping[typeContent](dataContent, isFetchingContent);
        if (isArtist) contentInfo = formatDataArtistInfo(dataArtist, contentInfo, isFetching);
        return { id, ...contentInfo, isFetching };
    };

    return { getContentInfo };
};

useGetContent.PropTypes = {
    typeContent: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};