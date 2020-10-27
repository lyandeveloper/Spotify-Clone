import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/playlists/:playlistId">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
