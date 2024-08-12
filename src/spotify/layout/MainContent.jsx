import { Header,MostHeaderItem } from "../components/mainContent/";

export const MainContent = () => {
  return (
    <main className="bg-deep-gray main rounded-lg">
      <Header></Header>
      <MostHeaderItem img='https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/7dGJo4pcD2V6oG8kP0tJRR/es-419/default' name='Mix'></MostHeaderItem>
    </main>
  );
};