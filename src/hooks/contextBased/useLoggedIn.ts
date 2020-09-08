// Core
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import store from 'store';

// Hooks
import { useDispatch } from '../../context';
import { accessToken } from '../../apollo';

// Instruments
import { ROUTE_PATHS, APP_NAME } from '../../constants';

export function isLoggedIn() {
    try {
        const value: boolean = store.get(`${APP_NAME}:isLoggedIn`, false);

        return value;
    } catch (error) {
        console.log('isLoggedIn', error);

        return false;
    }
}

export function useLoggedIn() {
    const apollo = useApolloClient();
    const dispatch = useDispatch();
    const { push } = useHistory();

    const setIsLoggedIn = (value: boolean, redirectTo?: keyof typeof ROUTE_PATHS) => {
        if (value) {
            dispatch({
                type: 'setIsLoggedIn',
                value,
            });
            redirectTo && push(ROUTE_PATHS[ redirectTo ]);
        } else {
            dispatch({
                type: 'setIsLoggedIn',
                value,
            });
            accessToken(null);
            apollo.resetStore();
            redirectTo && push(ROUTE_PATHS[ redirectTo ]);
        }
    };

    const setIsLoggedInToLocalStorage = (value: boolean, redirectTo?: keyof typeof ROUTE_PATHS) => {
        try {
            store.set(`${APP_NAME}:isLoggedIn`, value);
        } catch (error) {
            console.log('isLoggedIn', error);
        } finally {
            setIsLoggedIn(value, redirectTo);
        }
    };

    return {
        setIsLoggedIn,
        setIsLoggedInToLocalStorage,
    };
}
