import { useDispatch, useSelector } from 'react-redux';
import { LibraryItem } from '.';
import { setCompressedToggleByUser } from '../../../store/spotify';

export const Library = () => {

    const { itemsLibrary, sideBar } = useSelector(state => state.spotify);
    const { isCompressed } = sideBar;
    const dispatch = useDispatch();

    const onCompressed = () => {
        dispatch(setCompressedToggleByUser());
    };

    return (
        <section className="bg-l-base-secondary dark:bg-base-secondary w-full h-full rounded-md overflow-y-scroll">
            <div className='p-lg' onClick={onCompressed}>
                <span className="flex gap-lg font-bold cursor-pointer duration-text text-l-text-secondary fill-l-text-secondary dark:text-text-secondary hover:fill-l-text-primary hover:text-l-text-primary dark:hover:fill-text-white dark:hover:text-text-white">
                    <svg viewBox="0 0 24 24" className="h-6 pl-2"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                    {
                        !isCompressed && <span>Your library</span>
                    }
                </span>
            </div>
            <div>
                <div>

                </div>
                <div>
                    {
                        itemsLibrary.map(item => (
                            <LibraryItem img={item.images[0].url} {...item} key={item.id}></LibraryItem>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};