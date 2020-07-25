// Core
import { QueryHookOptions, useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const useCustomQuery = <TData, TVariables> (
    query: DocumentNode,
    options?: QueryHookOptions<TData, TVariables>,
) => {
    const result = useQuery<TData, TVariables>(query, options);

    // Throw API error
    if (result.error) {
        throw result.error;
    }

    return result;
};
