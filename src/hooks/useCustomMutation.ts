// Core
import * as ApolloReactHooks from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';

export const useCustomMutation = <TData, TVariables> (
    mutation: DocumentNode,
    options?: ApolloReactHooks.QueryHookOptions<TData, TVariables>,
) => {
    // use the original hook to run the query
    const result = ApolloReactHooks.useMutation<TData, TVariables>(mutation, options);

    // Throw API error
    if (result[ 1 ].error) {
        throw result[ 1 ].error;
    }

    return result;
};
