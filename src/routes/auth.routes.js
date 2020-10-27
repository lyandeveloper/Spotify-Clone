import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import Login from '../pages/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from '../services/spotify';
import { useStateProviderValue } from '../contexts/StateProvider';
const spotify = new SpotifyWebApi();

function AuthRoutes() {
  const [{ token }] = useStateProviderValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      localStorage.setItem('@RCAuth:token', _token);
    }
  }, [token]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AuthRoutes;
