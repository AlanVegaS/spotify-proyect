import { SideBar, MainContent, FooterPlayer } from './';
import { useEffect } from 'react';
import { useGetLibraryMostHeaderContentQuery } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressedValue, setLibrary, setMostHeaders, setModePhone } from '../../store/spotify';
import { useWindowWidth } from '../hooks';

export const SpotifyLayout = () => {

  const { data, isFetching } = useGetLibraryMostHeaderContentQuery();
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const { sideBar, phoneMode } = useSelector(state => state.spotify);
  const { isCompressed, isModifiedByUser } = sideBar;

  useEffect(() => {
    if (!isModifiedByUser) dispatch(setCompressedValue(windowWidth <= 964));
    dispatch(setModePhone(windowWidth <= 690));
  }, [windowWidth, isModifiedByUser]);

  useEffect(() => {
    let playlists = data?.playlists.items
    if (!isFetching && playlists) {
      playlists = playlists.filter(playlist => playlist !== null);
      dispatch(setMostHeaders(playlists.slice(0, 8)));
      dispatch(setLibrary(playlists.slice(8, playlists.length - 1)));
    }
  }, [data, isFetching]);

  return (
    <div className={`w-full h-screen gap-sm box-border p-sm bg-l-base-primary dark:bg-base-primary
      grid grid-areas-standar-template grid-rows-standar-template xs:grid-areas-phone-template xs:grid-cols-xs-template
      ${!isModifiedByUser
        ? 'sm:grid-cols-sm-template md:grid-cols-md-template lg:grid-cols-lg-template xl:grid-cols-xl-template'
        : isModifiedByUser && isCompressed
          ? 'grid-cols-sm-template'
          : 'grid-cols-md-template lg:grid-cols-lg-template xl:grid-cols-xl-template'
      }`
    }>
      {
        !isFetching &&
        (<>
          {
            !phoneMode && <SideBar></SideBar>
          }
          <MainContent></MainContent>
          <FooterPlayer></FooterPlayer>
        </>)
      }
    </div >
  );
};