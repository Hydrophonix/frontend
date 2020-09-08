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
import { ROUTE_PATHS } from '../../constants';

export const Routes: FC = () => {
    const { isLoggedIn } = useAppState();

    return (
        <Suspense fallback = { <Spinner/> }>
            <Switch>
                <PrivateRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATHS.Profile }>
                    <P.Profile />
                </PrivateRoute>

                <NotAuthRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATHS.Register }>
                    <P.Register />
                </NotAuthRoute>
                <NotAuthRoute
                    isLoggedIn = { isLoggedIn }
                    path = { ROUTE_PATHS.Login }>
                    <P.Login />
                </NotAuthRoute>

                <Route
                    exact
                    path = { ROUTE_PATHS.Game }>
                    <P.Game/>
                </Route>
                <Route
                    exact
                    path = { ROUTE_PATHS.Todos }>
                    <P.Todos />
                </Route>
                <Route
                    exact
                    path = { ROUTE_PATHS.Resume }>
                    <P.Resume />
                </Route>
                <Route path = { ROUTE_PATHS.Main }>
                    <P.Main />
                </Route>
            </Switch>
        </Suspense>
    );
};
