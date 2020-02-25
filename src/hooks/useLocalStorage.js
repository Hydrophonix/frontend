import { useState } from 'react';
import store from 'store';

export const useLocalStorage = (key, innitialValue = '') => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value = store.get(key);

            return value ? value : innitialValue;
        } catch (error) {
            console.log(`local storage error by key: ${key}. Npm package store error.`);

            return innitialValue;
        }
    });

    const setValue = (value) => {
        try {
            store.set(key, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    return [
        storedValue,
        setValue,
    ];
};
