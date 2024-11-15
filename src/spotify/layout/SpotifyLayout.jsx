import { SideBar, MainContent, FooterPlayer } from './';
import { useEffect } from 'react';
import { useGetLibraryMostHeaderContentQuery } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressedValue, setLibrary, setMostHeaders } from '../../store/spotify';
import { useWindowWidth } from '../hooks';

export const SpotifyLayout = () => {

  const { data } = useGetLibraryMostHeaderContentQuery();
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const { isCompressed, isModifiedByUser } = useSelector(state => state.spotify.sideBar);

  useEffect(() => {
    if (!isModifiedByUser) dispatch(setCompressedValue(windowWidth <= 964));
  }, [windowWidth, isModifiedByUser]);

  useEffect(() => {
    const playlists = data?.playlists.items
    if (playlists) {
      dispatch(setMostHeaders(playlists.slice(0, 8)));
      dispatch(setLibrary(playlists.slice(8, playlists.length - 1)));
    }
  }, [data]);

  return (
    <div className={`w-full h-screen gap-sm box-border p-sm bg-l-base-primary dark:bg-base-primary
    grid grid-areas-standar-template grid-rows-standar-template 
    ${!isModifiedByUser
        ? 'sm:grid-cols-sm-template md:grid-cols-md-template lg:grid-cols-lg-template xl:grid-cols-xl-template'
        : isModifiedByUser && isCompressed
          ? 'grid-cols-sm-template'
          : 'grid-cols-md-template lg:grid-cols-lg-template xl:grid-cols-xl-template'
      }`}>
      <SideBar></SideBar>
      <MainContent></MainContent>
      <FooterPlayer></FooterPlayer>
    </div>
  );
};