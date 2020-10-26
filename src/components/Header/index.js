import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from '../../contexts/StateProvider';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();
function Header() {
  const [{ user }, dispatch] = useStateProviderValue();
  useEffect(() => {
    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user: user,
      });
    });
  }, [dispatch]);
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
