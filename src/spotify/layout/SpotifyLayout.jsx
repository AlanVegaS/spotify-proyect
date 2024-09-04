import { SideBar, MainContent, FooterPlayer } from './';
import { useEffect } from 'react';
import { useGetLibraryMostHeaderContentQuery } from '../../store/api';
import { useDispatch } from 'react-redux';
import { setLibrary, setMostHeaders } from '../../store/spotify';

export const SpotifyLayout = () => {

  const { data } = useGetLibraryMostHeaderContentQuery();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const playlists = data?.playlists.items
    if (playlists) {
      dispatch(setMostHeaders(playlists.slice(0, 8)));
      dispatch(setLibrary(playlists.slice(8, playlists.length - 1)));
    }
  }, [data]);

  return (
    <div className="w-full h-screen grid-layout gap-sm box-border p-sm bg-l-base-primary dark:bg-base-primary">
      <SideBar></SideBar>
      <MainContent></MainContent>
      <FooterPlayer></FooterPlayer>
    </div>
  );
};