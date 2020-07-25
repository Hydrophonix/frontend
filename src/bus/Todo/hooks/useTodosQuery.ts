/* eslint-disable max-len */
// Core
import { QueryHookOptions } from '@apollo/client';

// Hooks
import { useCustomQuery } from '../../../hooks';

// GraphQL
import TodosSchema from '../schemas/todos.graphql';

// Types
import { Todos } from '../types';

export const useTodosQuery = (baseOptions?: QueryHookOptions<Todos, {}>) => {
    return useCustomQuery<Todos, {}>(TodosSchema, baseOptions);
};
