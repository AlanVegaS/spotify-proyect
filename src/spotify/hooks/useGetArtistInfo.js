import { PropTypes } from "prop-types";
import { useGetInfoArtistQuery, useGetTopTracksArtistQuery } from "../../store/api";
import { formatDataTracksArtist } from "../helpers/formatData";

export const useGetArtistInfo = (idArtist) => {
    const { data: artistData, isFetching: isFetchingArtis } = useGetInfoArtistQuery(idArtist);
    const { data: tracksData, isFetching: isFetchingList } = useGetTopTracksArtistQuery(idArtist);

    const isFetching = isFetchingArtis || isFetchingList;
    if (isFetching) return { isFetching };

    const formatData = formatDataTracksArtist(artistData, tracksData);

    return { id:idArtist, ...formatData, isFetching };
};

useGetArtistInfo.PropTypes = {
    id: PropTypes.string.isRequired,
};