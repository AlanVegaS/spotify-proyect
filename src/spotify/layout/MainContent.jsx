import { MostHeader, Header, Catalog } from "../components/mainContent/";

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
    },
    {
      img: 'https://i.scdn.co/image/ab67656300005f1f8b34d64e614539df299e7839',
      name: 'Duo Lingo5',
      description: 'Description'
    },
  ];

  return (
    <main className="bg-l-base-secondary dark:bg-base-secondary main rounded-lg">
      <div className="bg-gradient-to-b from-fuchsia-200 dark:from-fuchsia-900 rounded-lg">
        <Header></Header>
        <MostHeader></MostHeader>
        <Catalog category={'Artist'} contenList={constentList}></Catalog>
      </div>
    </main>
  );
};