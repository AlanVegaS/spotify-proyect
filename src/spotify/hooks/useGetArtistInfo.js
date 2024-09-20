import { PropTypes } from "prop-types";
import { useGetInfoArtistQuery, useGetTopTracksArtistQuery } from "../../store/api";

export const useGetArtistInfo = (idArtist) => {
    const contentList = useGetTopTracksArtistQuery(idArtist);
    const { data, isFetching } = useGetInfoArtistQuery(idArtist);

    if (!data || !contentList.data?.tracks) return { data: null };
    const name = data.name;
    const contentType = 'Artist';
    const img = data.images?.[2] ? data.images[2].url : data.images?.[0]?.url;
    const id = data.id;
    const info = data.genres.join(', ');
    const items = contentList.data?.tracks;

    return { data: { id, name, contentType, img, info, items }, isFetching };
};

useGetArtistInfo.PropTypes = {
    id: PropTypes.string.isRequired,
};