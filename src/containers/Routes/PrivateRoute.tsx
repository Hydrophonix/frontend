// Core
import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
    isLoggedIn: boolean;
    path: string;
    children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children, isLoggedIn, path }) => {
    return (
        <Route
            exact
            path = { path }>
            {isLoggedIn
                ? children
                : <Redirect to = '/login'/>
            }
        </Route>
    );
};
