// Core
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import store from 'store';

// Hooks
import { useDispatch } from '../../context';
import { accessToken } from '../../apollo';

// Instruments
import { ROUTE_PATH, APP_NAME } from '../../constants';

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

    const setIsLoggedIn = (value: boolean) => {
        if (value) {
            dispatch({
                type: 'setIsLoggedIn',
                value,
            });
            push(ROUTE_PATH.Main);
        } else {
            dispatch({
                type: 'setIsLoggedIn',
                value,
            });
            accessToken(null);
            apollo.resetStore();
            push(ROUTE_PATH.Login);
        }
    };

    const setIsLoggedInToLocalStorage = (value: boolean) => {
        try {
            store.set(`${APP_NAME}:isLoggedIn`, value);
        } catch (error) {
            console.log('isLoggedIn', error);
        } finally {
            setIsLoggedIn(value);
        }
    };

    return {
        setIsLoggedIn,
        setIsLoggedInToLocalStorage,
    };
}
