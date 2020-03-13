/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// GraphQL
import RegisterDocument from '../register.graphql';

// Types
import { Register, RegisterVariables } from '../types';

export const useRegisterMutation = (baseOptions?: ApolloReactHooks.MutationHookOptions<Register, RegisterVariables>) => {
    return ApolloReactHooks.useMutation<Register, RegisterVariables>(RegisterDocument, baseOptions);
};
