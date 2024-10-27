import PropTypes from 'prop-types';
import { useGetInfoArtistQuery, useLazyGetEpisodesShowsQuery, useLazyGetTopTracksArtistQuery, useLazyGetTracksPlaylistQuery } from '../../store/api';
import { formatDataEpisodes, formatDataTracksArtist, formatDataArtistInfo, formatDataTracksPlaylist } from '../helpers/formatData';
import { useEffect, useState } from 'react';

export const useGetContent = (typeContent, id) => {
    const isArtist = typeContent === 'artist';
    const { data: dataArtist, isFetching: isFetchingArtist } = useGetInfoArtistQuery(id, { skip: !isArtist });
    const [getTracksPlaylist, playlistTracksResult] = useLazyGetTracksPlaylistQuery();
    const [getTopTracksArtist, artistTracksResult] = useLazyGetTopTracksArtistQuery();
    const [getEpisodesShows, episodesResult] = useLazyGetEpisodesShowsQuery();

    const [content, setContent] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        let resp;
        if (typeContent === 'artist') resp = artistTracksResult;
        else if (typeContent === 'show') resp = episodesResult;
        else if (typeContent === 'playlist') resp = playlistTracksResult;

        if (resp) {
            const { data, isFetching: isFetchingContent } = resp;
            if (data) {
                const formatMapping = {
                    playlist: formatDataTracksPlaylist,
                    show: formatDataEpisodes,
                    artist: formatDataTracksArtist,
                };
    
                setIsFetching(isArtist ? (isFetchingArtist || isFetchingContent) : isFetchingContent);
    
                let contentInfo;
                if (!isFetching) {
                    contentInfo = formatMapping[typeContent](data, isFetchingContent);
                    if (isArtist) contentInfo = formatDataArtistInfo(dataArtist, contentInfo, isFetching);
                    setContent(contentInfo);
                }
            }
        }
    }, [artistTracksResult, dataArtist, episodesResult, isArtist, isFetching, isFetchingArtist, playlistTracksResult, typeContent]);

    function getContentInfo(typeContent, id) {
        if (typeContent === 'artist') getTopTracksArtist(id);
        else if (typeContent === 'show') getEpisodesShows(id);
        else if (typeContent === 'playlist') getTracksPlaylist(id);
    }

    return { content, isFetching, getContentInfo };
};

useGetContent.PropTypes = {
    typeContent: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};