/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// GraphQL
import UpdateTodoSchema from '../schemas/updateTodo.graphql';

// Types
import { UpdateTodo, UpdateTodoVariables } from '../types';

export const useUpdateTodoMutation = (baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodo, UpdateTodoVariables>) => {
    return ApolloReactHooks.useMutation<UpdateTodo, UpdateTodoVariables>(UpdateTodoSchema, baseOptions);
};
