// Core
import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/client';

// Apollo
import { client } from '../../apollo';

// Providers
import { AppStateProvider } from '../../context';
import { AppThemeProvider } from './AppThemeProvider';

const history = createBrowserHistory();

export const AppProviders: FC = ({ children }) => {
    return (
        <AppStateProvider>
            <ApolloProvider client = { client }>
                <Router history = { history }>
                    <AppThemeProvider>
                        { children }
                    </AppThemeProvider>
                </Router>
            </ApolloProvider>
        </AppStateProvider>
    );
};
