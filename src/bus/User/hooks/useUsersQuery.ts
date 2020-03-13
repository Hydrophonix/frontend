/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// Hooks
import { useCustomQuery } from '../../../hooks';

// GraphQL
import UsersDocument from '../users.graphql';

// Types
import { Users } from '../types';

export const useUsersQuery = (baseOptions?: ApolloReactHooks.MutationHookOptions<Users, {}>) => {
    return useCustomQuery<Users, {}>(UsersDocument, baseOptions);
};
