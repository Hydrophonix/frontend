// Core
import { useEffect } from 'react';
import store from 'store';

// Instruments
import { APP_NAME } from '../../constants';
import { useDispatch } from '../../context';

const matchDark = '(prefers-color-scheme: dark)';
const errorMessage = `local storage error by key: ${APP_NAME}:isDark. Npm package store error.`;

export function isDarkMode() {
    const isDarkScheme = window.matchMedia && window.matchMedia(matchDark).matches;

    try {
        const value: boolean = store.get(`${APP_NAME}:isDark`, isDarkScheme);

        return value;
    } catch (error) {
        console.log(errorMessage);

        return isDarkScheme;
    }
}

export function useDarkMode() {
    const dispatch = useDispatch();

    const setIsDarkMode = (value: boolean) => {
        dispatch({
            type: 'setIsDarkMode',
            value,
        });
    };
    const setIsDarkModeToLocalStorage = (value: boolean) => {
        try {
            store.set(`${APP_NAME}:isDark`, value);
            setIsDarkMode(value);
        } catch (error) {
            console.log(errorMessage);
        }
    };

    useEffect(() => {
        const matcher = window.matchMedia(matchDark);
        const onChange = ({ matches }: { matches: boolean }) => setIsDarkModeToLocalStorage(matches);

        matcher.addListener(onChange);

        return () => {
            matcher.removeListener(onChange);
        };
    }, [ dispatch ]);

    return {
        setIsDarkMode,
        setIsDarkModeToLocalStorage,
    };
}
