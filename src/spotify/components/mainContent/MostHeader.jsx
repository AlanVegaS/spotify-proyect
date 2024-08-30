import { useSelector } from "react-redux";
import { MostHeaderItem } from "./";

export const MostHeader = () => {

    const { itemsMostHeaders } = useSelector(state => state.spotify);

    return (
        <section className="grid grid-cols-most-header-lg sm:grid-cols-most-header-sm md:grid-cols-most-header-sm gap-4 sm:gap-2 md:gap-2 p-lg">
            {
                itemsMostHeaders.map(playlist => (
                    <MostHeaderItem img={playlist.images[0].url} name={playlist.name} key={playlist.name}></MostHeaderItem>
                ))
            }
        </section>
    );
};