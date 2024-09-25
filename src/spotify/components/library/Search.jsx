import { div } from "framer-motion/m";
import { useGetDataUrl } from "../../hooks";
import { HomeContent } from "../mainContent";

export const Search = () => {

    const { ID } = useGetDataUrl();
    return (
        <div>
            {
                ID ? <HomeContent term={ID}></HomeContent>
                    :
                    <div className="flex justify-center items-center text-l-text-secondary dark:text-text-secondary text-5xl">
                        <p className="mt-14">Search for something</p>
                    </div>
            }
        </div>
    );
};