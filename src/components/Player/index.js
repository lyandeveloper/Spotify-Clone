import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

import './styles.css';
import { Grid } from '@material-ui/core';

function Player() {
  return (
    <div className="player">
      <div className="player-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/a/ad/X_cover.png"
          alt=""
          className="player-albumLogo"
        />
        <div className="player-songInfo">
          <h4>Photograph</h4>
          <p>Ed Sheeran</p>
        </div>
      </div>
      <div className="player-center">
        <ShuffleIcon className="player-green" />
        <SkipPreviousIcon className="player-icon" />
        <PlayCircleOutlineIcon fontSize="large" className="player-icon" />
        <SkipNextIcon className="player-icon" />
        <RepeatIcon className="player-green" />
      </div>

      <div className="player-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Player;
