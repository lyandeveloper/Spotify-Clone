import React from 'react';
import Header from '../Header';
import { useStateProviderValue } from '../../contexts/StateProvider';
import './styles.css';
import {
  FavoriteOutlined,
  MoreHoriz,
  PlayCircleFilled,
} from '@material-ui/icons';
import SongRow from '../SongRow';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

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
