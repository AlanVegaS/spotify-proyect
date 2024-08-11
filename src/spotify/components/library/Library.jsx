import { LibraryItem } from '.';

export const Library = () => {
    return (
        <section className="bg-deep-gray w-full h-full rounded-md">
            <div className='p-lg'>
                <span className="flex gap-lg fill-text-gray hover:fill-text-white hover:text-text-white duration-text text-text-gray font-bold cursor-pointer">
                    <svg role="img" viewBox="0 0 24 24" className="h-6"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                    <span>Your library</span>
                </span>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <LibraryItem></LibraryItem>
                </div>
            </div>
        </section>
    );
};