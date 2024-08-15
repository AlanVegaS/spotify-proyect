import { Header, MostHeader } from "../components/mainContent/";

export const MainContent = () => {
  return (
    <main className="bg-l-base-secondary dark:bg-base-secondary main rounded-lg">
      <div className="bg-gradient-to-b from-fuchsia-200 dark:from-fuchsia-900 rounded-lg">
        <Header></Header>
        <MostHeader></MostHeader>
      </div>
    </main>
  );
};