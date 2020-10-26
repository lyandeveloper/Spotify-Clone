import React, { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './contexts/StateProvider';
import Routes from './routes';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        localStorage.setItem('@RCAuth:user', JSON.stringify(user));
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      localStorage.setItem('@RCAuth:token', _token);
    }
  }, [dispatch, token]);

  return <Routes />;
}

export default App;
