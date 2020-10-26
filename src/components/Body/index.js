import React from 'react';
import Header from '../Header';
import { useStateProviderValue } from '../../contexts/StateProvider';
import './styles.css';

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
    </div>
  );
}

export default Body;
