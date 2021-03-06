import React from 'react';
import SidebarOption from '../SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryIcon from '@material-ui/icons/LibraryMusic';
import './styles.css';
import Playlists from '../Playlists';
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption url="/" Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Buscar" />
      <SidebarOption Icon={LibraryIcon} option="Sua Biblioteca" />

      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      <Playlists />
    </div>
  );
}

export default Sidebar;
