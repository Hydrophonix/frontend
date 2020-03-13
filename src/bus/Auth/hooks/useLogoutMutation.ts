/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// GraphQL
import LogoutDocument from '../logout.graphql';

// Types
import { Logout } from '../types';

export const useLogoutMutation = (baseOptions?: ApolloReactHooks.MutationHookOptions<Logout, {}>) => {
    return ApolloReactHooks.useMutation<Logout, {}>(LogoutDocument, baseOptions);
};
