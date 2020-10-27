import React, { useEffect } from 'react';
import SidebarOption from '../SidebarOption';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from '../../contexts/StateProvider';

const spotify = new SpotifyWebApi();

function Playlists() {
  const [{ playlists, token, loading }, dispatch] = useStateProviderValue();
  useEffect(() => {
    spotify.setAccessToken(token);
    spotify.getUserPlaylists({ limit: 50 }).then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });

      dispatch({
        type: 'SET_LOADING',
        loading: true,
      });
    });
  }, [dispatch, token]);

  return (
    <div className="playlists">
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          url={`/playlists/${playlist.id}`}
          key={playlist.id}
          option={playlist.name}
          playlistId={playlist.id}
        />
      ))}
    </div>
  );
}

export default Playlists;
