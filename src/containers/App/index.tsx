// Core
import React, { useEffect, FC, useState  } from 'react';

// Containers
import { Routes } from '../Routes';
import { TopBar } from '../TopBar';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useDarkMode, useLoggedIn } from '../../hooks';
import { useAppState, useDispatch } from '../../context';

// Instruments
import { accessToken } from '../../apollo';
import { fetchAccessToken } from '../../utils';
import { APP_NAME } from '../../constants';

// Assets
import { AppContainer } from './styles';

type TFetchAccessTokenResponse = {
    success: boolean;
    accessToken: string;
}

export const App: FC = () => {
    const [ loading, setLoading ] = useState(true);
    const { setIsLoggedInToLocalStorage, setIsLoggedIn } = useLoggedIn();
    const { setIsDarkMode } = useDarkMode();
    const { isOnline } = useAppState();
    const dispatch = useDispatch();

    // Refresh session
    useEffect(() => {
        if (isOnline) {
            setLoading(true);
            fetchAccessToken()
                .then((response) => response.json())
                .then((response: TFetchAccessTokenResponse) => {
                    if (response.success) {
                        accessToken(response.accessToken);
                        setIsLoggedInToLocalStorage(true);
                    } else {
                        setIsLoggedInToLocalStorage(false);
                    }

                    setLoading(false);
                });
        }
    }, [ isOnline ]);

    // App listeners
    useEffect(() => {
        const onStatusChange = () => dispatch({
            type:  'setIsOnline',
            value: window.navigator.onLine,
        });
        window.addEventListener('online', onStatusChange);
        window.addEventListener('offline', onStatusChange);
        window.addEventListener('storage', (event) => {
            switch (event.key) {
                case `${APP_NAME}:isLoggedIn`:
                    try {
                        const value: boolean = JSON.parse(event.newValue!);
                        setIsLoggedIn(value);
                    } catch (error) {
                        console.log('useLoggedIn: ', error);
                    }

                    break;

                case `${APP_NAME}:isDark`:
                    try {
                        const value: boolean = JSON.parse(event.newValue!);
                        setIsDarkMode(value);
                    } catch (error) {
                        console.log('useDarkMode: ', error);
                    }

                    break;

                default:
                    break;
            }
        });
    }, []);

    if (loading) {
        return (
            <Spinner size = '10x'/>
        );
    }

    return (
        <AppContainer>
            <TopBar/>
            <Routes />
        </AppContainer>
    );
};
