/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// GraphQL
import CreateTodoSchema from '../schemas/createTodo.graphql';

// Types
import { CreateTodo, CreateTodoVariables } from '../types';

export const useCreateTodoMutation = (baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodo, CreateTodoVariables>) => {
    return ApolloReactHooks.useMutation<CreateTodo, CreateTodoVariables>(CreateTodoSchema, baseOptions);
};
