import { CurrentSong, Player, Volume } from '../components/footer';

export const FooterPlayer = () => {
  return (
    <footer className="footer rounded-lg flex justify-between text-l-text-primary dark:text-text-primary bg-l-base-primary dark:bg-base-primary">
      <CurrentSong></CurrentSong>
      <Player></Player>
      <Volume></Volume>
    </footer>
  );
};