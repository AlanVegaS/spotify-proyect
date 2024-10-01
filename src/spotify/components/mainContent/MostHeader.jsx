import { useSelector } from "react-redux";
import { MostHeaderItem } from "./";
import { motion } from "framer-motion";


export const MostHeader = () => {
    const { itemsMostHeaders } = useSelector(state => state.spotify);

    return (
        <motion.section className="grid grid-cols-most-header-lg sm:grid-cols-most-header-sm md:grid-cols-most-header-sm gap-4 sm:gap-2 md:gap-2 p-lg"
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