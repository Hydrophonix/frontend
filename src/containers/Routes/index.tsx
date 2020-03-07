// Core
import React, { useEffect, useMemo, FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

// Components
// import { Toolbar } from '../../components';

// Pages
import * as P from '../../pages';

// Hooks
// import { useLocalStorage } from '../../hooks';
export const Routes: FC = () => {

    useEffect(() => {
        console.log('Routes');
    });

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/register">
            <P.Register />
          </Route>
          <Route exact path="/login">
            <P.Login />
          </Route>
          <Route path="/">
            <P.Main />
          </Route>
        </Switch>
      </BrowserRouter>
    );
};
