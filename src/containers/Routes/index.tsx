// Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import * as P from '../../pages';

export const Routes: React.FC = () => {
    return (
        <Suspense fallback = { <div>Loading page...</div> }>
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
                <Route
                    exact
                    path = '/game'>
                    <P.Game />
                </Route>
                <Route
                    exact
                    path = '/todos'>
                    <P.Todos />
                </Route>
                <Route path = '/'>
                    <P.Main />
                </Route>
            </Switch>
        </Suspense>
    );
};
