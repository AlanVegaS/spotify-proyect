import { useEffect, useState } from "react";
import { Header, MostHeader, Catalog } from "../components/mainContent";
import { getContentCatalog } from "../../helpers/getContentCatalog";

export const MainContent = () => {

  const [topArtists, setTopArtists] = useState(null);
  const [topPlaylists, setTopPlaylists] = useState(null);
  const [topPodcast, setPodcast] = useState(null);

  useEffect(() => {
    const callGetContent = async () => {
      const content = await getContentCatalog();
      setTopArtists(content.artists.items);
      setTopPlaylists(content.playlists.items);
      setPodcast(content.shows.items);
    }

    callGetContent();
  }, []);

  return (
    <main className="main flex flex-col bg-l-base-secondary dark:bg-base-secondary bg-gradient-to-b from-emerald-100 dark:from-fuchsia-900 rounded-lg h-auto">
      <Header></Header>
      <div className="grow overflow-y-scroll">
        <MostHeader></MostHeader>
        {topPlaylists && <Catalog category="Discover new shows" contenList={topPodcast} key="Discover new shows"></Catalog>}
        {topArtists && <Catalog category="Top artists" contenList={topArtists} key="Top artists"></Catalog>}
        {topPodcast && <Catalog category="Best playlists" contenList={topPlaylists} key="Best playlists"></Catalog>}
      </div>
    </main>
  );
};