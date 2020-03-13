// Core
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import { TopBar } from '../../components';

// Pages
import * as P from '../../pages';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback = { <div>Loading topbar...</div> }>
                <TopBar />
            </Suspense>
            <Suspense  fallback = { <div>Loading page...</div> }>
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
            </Suspense>
        </BrowserRouter>
    );
};
