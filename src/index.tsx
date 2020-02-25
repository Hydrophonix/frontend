
// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';

// History
const history = createBrowserHistory();

// Data Store
import { client } from './apollo';

// App
import { App } from './containers/App';

render(
    <ApolloProvider client={client}>
        <Router history = { history }>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('app'),
);
