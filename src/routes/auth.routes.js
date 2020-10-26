import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
// import { Container } from './styles';

function AuthRoutes() {
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
