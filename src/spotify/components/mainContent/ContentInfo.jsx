import PropTypes from "prop-types";
import { ContentTable } from "./ContentTable";
import { Loading, PlayPauseIcon } from "./";
import { motion } from "framer-motion";

export const ContentInfo = ({ id, name, contentType, img, info, contentList, isFetching }) => {
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
                        <div className="m-sm mt-4 h-16 flex"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <PlayPauseIcon id={id} type={contentType}></PlayPauseIcon>
                        </div>
                        <ContentTable contentList={contentList}></ContentTable>
                    </motion.div>
            }
        </>
    );
};

ContentInfo.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    contentType: PropTypes.string,
    img: PropTypes.string,
    info: PropTypes.string,
    contentList: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
};