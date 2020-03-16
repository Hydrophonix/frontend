// Core
import React, { useEffect, FC, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

// Data Store
import { client } from '../../apollo';

// Containers
import { Routes } from '../Routes';

// Components
import { TopBar } from '../../components';

// Hooks
import { useLocalStorage } from '../../hooks';

// Instruments
import { setAccessToken } from '../../tokenStore';
import { TOKEN_URL } from '../../constants';

// Assets
import { GlobalReset } from '../../assets';
import * as themes from '../../assets/themes';

const history = createBrowserHistory();

export const App: FC = () => {
    const [ loading, setLoading ] = useState(true);
    const [ themeName ] = useLocalStorage('theme', '');

    useEffect(() => {
        fetch(TOKEN_URL, { credentials: 'include', method: 'POST' })
            .then(async (res) => {
                const { accessToken, ok } = await res.json();
                console.log('"|_(ʘ_ʘ)_/" =>: App:FC -> ok', ok);
                setAccessToken(accessToken);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log('app rerender');
    });

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <ApolloProvider client = { client }>
            <Router history = { history }>
                <ThemeProvider theme = { themeName || themes.defaultLight } >
                    <GlobalReset />
                    <TopBar />
                    <Routes />
                </ThemeProvider>
            </Router>
        </ApolloProvider>
    );
};
