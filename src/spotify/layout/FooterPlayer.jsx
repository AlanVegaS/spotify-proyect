import { CurrentSong, Player, Volume } from '../components/footer';

export const FooterPlayer = () => {
  return (
    <footer className="rounded-lg flex justify-between text-l-text-primary dark:text-text-primary bg-l-base-primary dark:bg-base-primary
    grid-in-footer
    ">
      <CurrentSong></CurrentSong>
      <Player></Player>
      <Volume></Volume>
    </footer>
  );
};