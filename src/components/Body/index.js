import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../Header';
import { useStateProviderValue } from '../../contexts/StateProvider';
import './styles.css';
import {
  FavoriteOutlined,
  MoreHoriz,
  PlayCircleFilled,
} from '@material-ui/icons';
import SongRow from '../SongRow';
import { useParams } from 'react-router-dom';

const spotify = new SpotifyWebApi();

function Body() {
  const { playlistId } = useParams();
  const [{ discover_weekly, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    spotify.setAccessToken(token);
    spotify.getPlaylist(playlistId).then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      });
    });
  }, [dispatch, playlistId, token]);

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilled className="body-shuffle" />
          <FavoriteOutlined fontSize="large" />
          <MoreHoriz />
        </div>
      </div>

      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
}

export default Body;
