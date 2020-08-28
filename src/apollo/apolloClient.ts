// Core
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from '@apollo/client';

// Instruments
import { GRAPHQL_URL } from '../constants';
import { tokenRefreshLink, errorLink, requestLink } from './middlewares';

export const client = new ApolloClient({
    link: ApolloLink.from([
        tokenRefreshLink,
        errorLink,
        requestLink,
        new HttpLink({
            uri:         GRAPHQL_URL,
            credentials: 'include',
        }),
    ]),
    cache: new InMemoryCache(),
    // TODO: check
    // connectToDevTools
});
