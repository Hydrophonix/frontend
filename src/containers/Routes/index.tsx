// Core
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import { TopBar } from '../../components';

// Pages
import * as P from '../../pages';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route
                    exact
                    path = '/register'>
                    <P.Register />
                </Route>
                <Route
                    exact
                    path = '/login'>
                    <P.Login />
                </Route>
                <Route
                    exact
                    path = '/me'>
                    <P.Me />
                </Route>
                <Route path = '/'>
                    <P.Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
