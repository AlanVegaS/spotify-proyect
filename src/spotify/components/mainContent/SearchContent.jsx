import { useEffect, useState } from "react";
import { useGetSearchQuery } from "../../../store/api";
import { Catalog } from "./Catalog";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const SearchContent = ({ term }) => {
    const { data } = useGetSearchQuery(term);

    const [topArtists, setTopArtists] = useState(null);
    const [topPlaylists, setTopPlaylists] = useState(null);
    const [topPodcast, setPodcast] = useState(null);

    useEffect(() => {
        const content = data;
        if (content) {
            setTopArtists(content.artists?.items);
            setTopPlaylists(content.playlists?.items);
            setPodcast(content.shows?.items);
        }
    }, [data]);

    return (
        <motion.div
            animate={{ opacity: 1 }}
            transition={{
                duration: .5
            }}
            initial={{ opacity: 0 }}
        >
            {topPlaylists && <Catalog category="Discover new shows" contenList={topPodcast} key="Discover new shows"></Catalog>}
            {topArtists && <Catalog category="Top artists" contenList={topArtists} key="Top artists"></Catalog>}
            {topPodcast && <Catalog category="Best playlists" contenList={topPlaylists} key="Best playlists"></Catalog>}
        </motion.div>);
};

SearchContent.propTypes = {
    term: PropTypes.string.isRequired,
};