import { ContentInfo } from '.';
import { useGetContent, useGetDataUrl } from '../../hooks';

export const PlaylistsShowsContent = () => {
    const { entity, ID } = useGetDataUrl();
    const resp = useGetContent(entity, ID);

    return (
        <ContentInfo  {...resp}></ContentInfo>
    );
};