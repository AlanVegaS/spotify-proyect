import { Header, MostHeader, Catalog } from "../components/mainContent";

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

  const C1 = {
    category: 'Artists',
    constentList
  }

  return (
    <main className="bg-l-base-secondary dark:bg-base-secondary main rounded-lg">
      <div className="bg-gradient-to-b from-fuchsia-200 dark:from-fuchsia-900 rounded-lg">
        <Header></Header>
        <div className="overflow-y-auto">
          <MostHeader></MostHeader>
          <Catalog category={C1.category} contenList={C1.constentList} key={C1.category}></Catalog>
          <Catalog category={C1.category} contenList={C1.constentList} key={C1.category}></Catalog>
          <Catalog category={C1.category} contenList={C1.constentList} key={C1.category}></Catalog>
          <Catalog category={C1.category} contenList={C1.constentList} key={C1.category}></Catalog>
        </div>
      </div>
    </main>
  );
};