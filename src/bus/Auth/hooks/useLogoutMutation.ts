/* eslint-disable max-len */
// Core
import { MutationHookOptions, useMutation } from '@apollo/client';

// GraphQL
import LogoutSchema from '../schemas/logout.graphql';

// Types
import { Logout } from '../types';

export const useLogoutMutation = (baseOptions?: MutationHookOptions<Logout, {}>) => {
    return useMutation<Logout, {}>(LogoutSchema, baseOptions);
};
