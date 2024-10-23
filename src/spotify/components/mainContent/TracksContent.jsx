import { ContentInfo } from '.';
import { useGetContent, useGetDataUrl } from '../../hooks';

export const TracksContent = () => {
    const { entity, ID } = useGetDataUrl();
    const { getContentInfo } = useGetContent(entity, ID);
    const resp = getContentInfo(entity, ID);

    return (
        <>
            {!resp.isFetching && <ContentInfo {...resp} />}
        </>
    );
};