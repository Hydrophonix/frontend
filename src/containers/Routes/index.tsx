// Core
import React, { FC, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import * as P from '../../pages';

// Elements
import { Spinner } from '../../elements';
import { PrivateRoute } from './PrivateRoute';
import { NotAuthRoute } from './NotAuthRoute';

// Hooks
import { useAppState } from '../../context';

// Instruments
import { ROUTE_PATH } from '../../constants';

export const Routes: FC = () => {
    const { isLoggedIn } = useAppState();

    return (
        <Suspense fallback = { <Spinner/> }>
            <Switch>
                <PrivateRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATH.Profile }>
                    <P.Profile />
                </PrivateRoute>

                <NotAuthRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATH.Register }>
                    <P.Register />
                </NotAuthRoute>
                <NotAuthRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATH.Login }>
                    <P.Login />
                </NotAuthRoute>

                <Route
                    exact
                    path = { ROUTE_PATH.Game }>
                    <P.Game/>
                </Route>
                <Route
                    exact
                    path = { ROUTE_PATH.Todos }>
                    <P.Todos />
                </Route>
                <Route
                    exact
                    path = { ROUTE_PATH.Resume }>
                    <P.Resume />
                </Route>
                <Route path = { ROUTE_PATH.Main }>
                    <P.Main />
                </Route>
            </Switch>
        </Suspense>
    );
};
