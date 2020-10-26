import React from 'react';
import SidebarOption from '../SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryIcon from '@material-ui/icons/LibraryMusic';
import './styles.css';
import { useStateProviderValue } from '../../contexts/StateProvider';

function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue();

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
