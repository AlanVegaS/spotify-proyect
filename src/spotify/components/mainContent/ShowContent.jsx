import { ContentTable } from './';
import { useGetContent, useGetDataUrl } from '../../hooks';

export const ShowContent = () => {
    const { entity, ID } = useGetDataUrl();
    const { name, contentType, img, info, contentList } = useGetContent(entity, ID);

    return (
        <div className="text-l-text-primary dark:text-text-primary p-lg overflow-y-scroll">
            <div className="flex min-w-[426px]">
                <div className="mr-3 flex items-center sm:w-36 md:w-1/4 w-64 group">
                    <img className="w-full aspect-square" src={img} alt="cover" />
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-sm">{contentType}</p>
                    <h1 className="font-extrabold py-2 sm:text-3xl md:text-6xl text-8xl">{name}</h1>
                    <div className="flex font-thin text-sm">
                        <span>{info}</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-4 h-16 flex items-center justify-center aspect-square m-sm bg-base-green rounded-full shadow-play transition-all duration-100 hover:scale-102">
                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                </div>
            </div>
            {contentList && <ContentTable contentList={contentList}></ContentTable>}
        </div>
    );
};