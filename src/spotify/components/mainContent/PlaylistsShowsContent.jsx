import { ContentInfo } from '.';
import { useGetContent, useGetDataUrl } from '../../hooks';

export const PlaylistsShowsContent = () => {
    const { entity, ID } = useGetDataUrl();
    const resp = useGetContent(entity, ID);
    console.log(resp);


    return (
        <ContentInfo  {...resp}></ContentInfo>
    );
};