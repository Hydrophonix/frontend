// Core
import { useEffect, MutableRefObject, useRef } from 'react';

type TCallback = (event: MouseEvent) => void;

export function useClickOutside<T>(elRef: MutableRefObject<T | any>, callback: TCallback) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!elRef.current.containes(event.target)) {
                callbackRef.current(event);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return document.removeEventListener('click', handleClickOutside, true);
    }, [ elRef, callbackRef ]);
}
