// Core
import { ApolloLink, Observable } from '@apollo/client';

// Instruments
import { accessToken } from '../localState';

export const requestLink = new ApolloLink((operation, forward) => new Observable((observer) => {
    let handle: any = null;
    Promise.resolve(operation)
        .then((operation) => {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${accessToken()}`,
                },
            });
        })
        .then(() => {
            handle = forward(operation).subscribe({
                next:     observer.next.bind(observer),
                error:    observer.error.bind(observer),
                complete: observer.complete.bind(observer),
            });
        })
        .catch(observer.error.bind(observer));

    return () => {
        if (handle) {
            handle.unsubscribe();
        }
    };
}));
