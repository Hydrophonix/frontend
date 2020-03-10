
// Core
import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';

// Data Store
import { client } from './apollo';

// App
import { App } from './containers/App';

const history = createBrowserHistory();

render(
    <ApolloProvider client = { client }>
        <Router history = { history }>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('app'),
);
