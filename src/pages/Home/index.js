import React from 'react';
import Body from '../../components/Body';
import Player from '../../components/Player';
import Sidebar from '../../components/Sidebar';

import './styles.css';

function Home({ spotify }) {
  return (
    <div className="home">
      <div className="home-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Player />
    </div>
  );
}

export default Home;
