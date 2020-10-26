import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function SidebarOption({ option, Icon, playlistId }) {
  return (
    <Link to={`/playlists/${playlistId}`} className="sidebarOption">
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </Link>
  );
}

export default SidebarOption;
