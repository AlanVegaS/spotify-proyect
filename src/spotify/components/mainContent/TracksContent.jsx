import { useEffect } from 'react';
import { ContentInfo } from '.';
import { useGetContent, useGetDataUrl } from '../../hooks';

export const TracksContent = () => {
    const { entity, ID } = useGetDataUrl();
    const { content, isFetching, getContentInfo } = useGetContent(entity, ID);


    useEffect(() => {
        getContentInfo(entity, ID);
    }, [ID]);

    return (
        <>
            <ContentInfo {...content} isFetching = {isFetching}></ContentInfo>
        </>
    );
};