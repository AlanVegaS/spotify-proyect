import { useGetDataUrl } from "../../hooks";
import { SearchContent } from "../mainContent";

export const Search = () => {

    const { ID } = useGetDataUrl();
    return (
        <div className="grow overflow-y-scroll">
            {
                ID ? <SearchContent term={ID}></SearchContent>
                    :
                    <div className="flex justify-center items-center text-l-text-secondary dark:text-text-secondary text-5xl">
                        <p className="mt-14">Search for something</p>
                    </div>
            }
        </div>
    );
};