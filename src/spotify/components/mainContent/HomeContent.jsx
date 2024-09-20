import { useEffect, useState } from "react";
import { useGetCatalogsQuery } from "../../../store/api";
import { Catalog, MostHeader } from "./";


export const HomeContent = () => {
	const { data } = useGetCatalogsQuery();

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

    return (<div className="grow overflow-y-scroll">
        <MostHeader></MostHeader>
        {topPlaylists && <Catalog category="Discover new shows" contenList={topPodcast} key="Discover new shows"></Catalog>}
        {topArtists && <Catalog category="Top artists" contenList={topArtists} key="Top artists"></Catalog>}
        {topPodcast && <Catalog category="Best playlists" contenList={topPlaylists} key="Best playlists"></Catalog>}
    </div>);
};