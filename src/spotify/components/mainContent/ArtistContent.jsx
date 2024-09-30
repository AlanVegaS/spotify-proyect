import { ContentInfo } from '.';
import { useGetArtistInfo, useGetDataUrl } from '../../hooks';

export const ArtistContent = () => {
    const { ID } = useGetDataUrl();
    const resp = useGetArtistInfo(ID);
    console.log(resp);
    

    return (
        <ContentInfo  {...resp}></ContentInfo>
    );
};