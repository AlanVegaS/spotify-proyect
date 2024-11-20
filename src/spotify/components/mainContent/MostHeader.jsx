import { useSelector } from "react-redux";
import { MostHeaderItem } from "./";
import { motion } from "framer-motion";

export const MostHeader = () => {
    const { itemsMostHeaders } = useSelector(state => state.spotify);

    return (
        <motion.section className="grid p-lg xs:p-0 grid-cols-most-header-lg xs:grid-cols-most-header-xs sm:grid-cols-most-header-sm md:grid-cols-most-header-sm gap-4 xs:gap-1 sm:gap-2 md:gap-2"
            animate={{ opacity: 1 }}
            transition={{
                duration: .5
            }}
            initial={{ opacity: 0 }}
        >
            {
                itemsMostHeaders.map(playlist => (
                    <MostHeaderItem img={playlist.images[0].url} {...playlist} key={playlist.id}></MostHeaderItem>
                ))
            }
        </motion.section>
    );
};