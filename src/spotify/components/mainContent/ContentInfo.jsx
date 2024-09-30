import PropTypes from "prop-types";
import { ContentTable } from "./ContentTable";
import { Loading } from "./";

export const ContentInfo = ({ name, contentType, img, info, contentList, isFetching }) => {
    return (
        <>
            {
                isFetching
                    ? <Loading></Loading>
                    : <div>
                        <div className="flex min-w-[426px] cursor-default">
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
                            <div className="mt-4 h-16 flex items-center justify-center aspect-square m-sm bg-base-green rounded-full shadow-play transition-all duration-100 hover:scale-102 cursor-pointer">
                                <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className='h-3/5'>
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        <ContentTable contentList={contentList}></ContentTable>
                    </div>
            }
        </>
    );
};

ContentInfo.propTypes = {
    name: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    contentList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};