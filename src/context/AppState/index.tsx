// Core
import React, { createContext, useContext, useReducer, FC, Dispatch, useMemo } from 'react';

// Instruments
import { isDarkMode, isLoggedIn } from '../../hooks';

// Types
import { TActions, TInitialState } from './types';

const storeContext = createContext({} as TInitialState);
const dispatchContext = createContext({} as Dispatch<TActions>);
const reducer = (state: TInitialState, { type, value }: TActions): TInitialState => {
    switch (type) {
        case 'setIsLoggedIn':
            return {
                ...state,
                isLoggedIn: value,
            };

        case 'setIsDarkMode':
            return {
                ...state,
                isDarkMode: value,
            };

        case 'setIsOnline':
            return {
                ...state,
                isOnline: value,
            };

        default:
            console.log('Unnown action type: ', type);

            return state;
    }
};

export const AppStateProvider: FC = ({ children }) => {
    const InitialState = useMemo((): TInitialState => {
        // TODO: add fetch to api, to check internet avaliability
        const isOnline = window.navigator.onLine;

        return {
            isDarkMode: isDarkMode(),
            isOnline,
            isLoggedIn: !isOnline && isLoggedIn(),
        };
    }, []);

    const [ appState, dispatch ] = useReducer(reducer, InitialState);

    return (
        <dispatchContext.Provider value = { dispatch }>
            <storeContext.Provider value = { appState }>
                {children}
            </storeContext.Provider>
        </dispatchContext.Provider>
    );
};

export function useAppState() {
    return useContext(storeContext);
}

export function useDispatch() {
    return useContext(dispatchContext);
}
