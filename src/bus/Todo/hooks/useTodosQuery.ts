/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// Hooks
import { useCustomQuery } from '../../../hooks';

// GraphQL
import TodosSchema from '../schemas/todos.graphql';

// Types
import { Todos } from '../types';

export const useTodosQuery = (baseOptions?: ApolloReactHooks.MutationHookOptions<Todos, {}>) => {
    return useCustomQuery<Todos, {}>(TodosSchema, baseOptions);
};
