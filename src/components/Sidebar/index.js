import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SidebarOption from '../SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryIcon from '@material-ui/icons/LibraryMusic';
import './styles.css';
import { useStateProviderValue } from '../../contexts/StateProvider';

const spotify = new SpotifyWebApi();
function Sidebar() {
  const [{ playlists, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    spotify.setAccessToken(token);
    spotify.getUserPlaylists({ limit: 50 }).then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });
    });
  }, [dispatch, token]);

  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Buscar" />
      <SidebarOption Icon={LibraryIcon} option="Sua Biblioteca" />

      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
