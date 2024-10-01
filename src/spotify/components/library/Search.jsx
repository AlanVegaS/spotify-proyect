import { useGetDataUrl } from "../../hooks";
import { SearchContent } from "../mainContent";
import { motion } from "framer-motion";

export const Search = () => {

    const { ID } = useGetDataUrl();
    return (
        <motion.div className="grow overflow-y-scroll"
            animate={{ opacity: 1 }}
            transition={{
                duration: 3
            }}
        >
            {
                ID ? <SearchContent term={ID}></SearchContent>
                    :
                    <div className="flex justify-center items-center text-l-text-secondary dark:text-text-secondary text-5xl">
                        <p className="mt-14">Search for something</p>
                    </div>
            }
        </motion.div>
    );
};