import { ContentInfo } from '.';
import { useGetArtistInfo, useGetDataUrl } from '../../hooks';

export const ArtistContent = () => {
    const { ID } = useGetDataUrl();
    const resp = useGetArtistInfo(ID);

    return (
        <ContentInfo  {...resp}></ContentInfo>
    );
};