// Core
import { useState } from 'react';
import store from 'store';

// Instruments
import { APP_NAME } from '../constants';

export const useLocalStorage = <_, TValue>(key: string, innitialValue: TValue): [TValue, Function] => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value: TValue = store.get(`${APP_NAME}:${key}`);

            return value ? value : innitialValue;
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Npm package store error.`);

            return innitialValue;
        }
    });

    const setValue = (value: TValue) => {
        try {
            store.set(`${APP_NAME}:${key}`, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    return [
        storedValue,
        setValue,
    ];
};
