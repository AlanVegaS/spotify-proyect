import { useEffect, useState } from "react";
import { Header, MostHeader, Catalog } from "../components/mainContent";
import { getContentCatalog } from "../../helpers/getContentCatalog";

export const MainContent = () => {

  const constentList = [
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingoh',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingof',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingod',
      description: 'Description'
    }, {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingos',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingoa',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingo1',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingo2',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingo3',
      description: 'Description'
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingo4',
      description: 'Description'
    }
  ];

  const [topArtists, setTopArtists] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [topPodcast, setPodcast] = useState([]);

  useEffect(() => {
    const callGetContent = async () => {
      const content = await getContentCatalog();
      console.log(content);
      setTopArtists(content.artists.items);
      setTopPlaylists(content.playlists.items);
      setPodcast(content.shows.items);
    }

    callGetContent();
  }, []);

  const C1 = {
    category: 'Artists',
    constentList
  }

  return (
    <main className="main flex flex-col bg-l-base-secondary dark:bg-base-secondary bg-gradient-to-b from-emerald-100 dark:from-fuchsia-900 rounded-lg h-auto">
      <Header></Header>
      <div className="grow overflow-y-scroll">
        <MostHeader></MostHeader>
        <Catalog category="Top artists" contenList={topArtists} key="Top artists"></Catalog>
        <Catalog category="Best playlist" contenList={topPlaylists} key="Best playlist"></Catalog>
        <Catalog category="Discover new shows" contenList={topPodcast} key="Discover new shows"></Catalog>
        <Catalog category={C1.category} contenList={C1.constentList} key={C1.category}></Catalog>
      </div>
    </main>
  );
};