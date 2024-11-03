import PropTypes from 'prop-types';
import { TrackItem } from './TrackItem';
import { useGetActiveSong } from '../../hooks';

export const ContentTable = ({ contentList }) => {
    const { activeSong } = useGetActiveSong();
    return (
        <div className="fill-base-primary dark:fill-text-primary">
            <div className="grid grid-cols-table-content h-7 m-4 ml-sm border-b-l-text-secondary border-solid border-b">
                <p className="flex justify-center w-full">#</p>
                <p>Title</p>
                <div className="flex justify-center">
                    <svg aria-hidden="true" className="w-5"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
                </div>
            </div>
            {contentList && contentList.map(item => (
                <TrackItem key={item.id} {...item} activeIdSong={activeSong?.id}></TrackItem>
            ))}
        </div>
    );
};

ContentTable.propTypes = {
    contentList: PropTypes.array.isRequired,
};