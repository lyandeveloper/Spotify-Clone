import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from '../../contexts/StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateProviderValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          type="text"
          name=""
          id=""
          placeholder="Busque artistas, músicas ou podcasts"
        />
      </div>

      <div className="header-right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
