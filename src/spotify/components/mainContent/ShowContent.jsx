import { ContentTable } from './';

export const ShowContent = () => {
    return (
        <div className="text-l-text-primary dark:text-text-primary p-lg">
            <div className="flex min-w-[426px]">
                <div className="mr-3 flex items-center sm:w-36 md:w-1/4 w-64 group">
                    <img className="w-full aspect-square" src="https://i.scdn.co/image/ab67616d00004851a7292b6863258e889b78d787" alt="cover" />
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-sm">Content type</p>
                    <h1 className="font-extrabold py-2 sm:text-3xl md:text-6xl text-8xl">Playlist name</h1>
                    <div className="flex font-thin text-sm">
                        <img className="rounded-full aspect-square w-6 mr-1" src="https://i.scdn.co/image/ab67616d00004851a7292b6863258e889b78d787" alt="profile" />
                        <span><span className="font-semibold">userOwner </span>total songs, total time</span>
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
            <ContentTable></ContentTable>
        </div>
    );
};