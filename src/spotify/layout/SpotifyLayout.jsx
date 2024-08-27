import { SideBar, MainContent, FooterPlayer } from './';
import '../styles/style.css';

export const SpotifyLayout = () => {
  return (
    <div className="w-full h-screen grid-layout gap-sm box-border p-sm bg-l-base-primary dark:bg-base-primary">
      <SideBar></SideBar>
      <MainContent></MainContent>
      <FooterPlayer></FooterPlayer>
    </div>
  );
};