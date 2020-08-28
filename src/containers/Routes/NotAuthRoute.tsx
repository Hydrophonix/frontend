// Core
import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface NotAuthRouteProps {
    isLoggedIn: boolean;
    path: string;
    children: ReactNode;
}

export const NotAuthRoute: FC<NotAuthRouteProps> = ({ children, isLoggedIn, path }) => {
    return (
        <Route
            exact
            path = { path }>
            {!isLoggedIn
                ? children
                : <Redirect to = '/'/>
            }
        </Route>
    );
};
