import PropTypes from "prop-types";
import { ContentTable } from "./ContentTable";
import { Loading, PlayPauseIcon } from "./";
import { motion } from "framer-motion";

export const ContentInfo = ({ name, contentType, img, info, contentList, isFetching }) => {
    return (
        <>
            {
                isFetching
                    ? <Loading></Loading>
                    : <motion.div
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: .5
                        }}
                        initial={{ opacity: 0 }}>
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
                        <div className="m-sm mt-4 h-16 flex">
                            <PlayPauseIcon></PlayPauseIcon>
                        </div>
                        <ContentTable contentList={contentList}></ContentTable>
                    </motion.div>
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