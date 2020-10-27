import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from '../contexts/StateProvider';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const spotify = new SpotifyWebApi();

function Routes() {
  const [{ token }] = useStateProviderValue();

  return token ? <AppRoutes spotify={spotify} /> : <AuthRoutes />;
}

export default Routes;
