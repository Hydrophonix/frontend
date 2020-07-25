// Core
import { MutationHookOptions, useMutation } from '@apollo/client';

// GraphQL
import UpdateTodoSchema from '../schemas/updateTodo.graphql';

// Types
import { UpdateTodo, UpdateTodoVariables } from '../types';

export const useUpdateTodoMutation = (baseOptions?: MutationHookOptions<UpdateTodo, UpdateTodoVariables>) => {
    return useMutation<UpdateTodo, UpdateTodoVariables>(UpdateTodoSchema, baseOptions);
};
