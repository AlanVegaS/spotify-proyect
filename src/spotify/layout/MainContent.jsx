import { Header, MostHeader } from "../components/mainContent/";

export const MainContent = () => {
  return (
    <main className="bg-deep-gray main rounded-lg">
      <div className="bg-gradient-to-b from-fuchsia-950">
        <Header></Header>
        <MostHeader></MostHeader>
      </div>
    </main>
  );
};