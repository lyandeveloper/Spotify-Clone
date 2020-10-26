import React, { useEffect } from 'react';
import './App.css';
import { getTokenFromUrl } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './contexts/StateProvider';
import Routes from './routes';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }] = useStateProviderValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      localStorage.setItem('@RCAuth:token', _token);

      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        localStorage.setItem('@RCAuth:user', JSON.stringify(user));
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Routes />;
}

export default App;
