// Core
import { MutationHookOptions, useMutation } from '@apollo/client';

// GraphQL
import TodosSchema from '../schemas/todos.graphql';
import DeleteTodoSchema from '../schemas/deleteTodo.graphql';

// Types
import { DeleteTodo, DeleteTodoVariables, Todos } from '../types';

export const useDeleteTodoMutation = (options?: MutationHookOptions<DeleteTodo, DeleteTodoVariables>) => {
    return useMutation<DeleteTodo, DeleteTodoVariables>(DeleteTodoSchema, {
        update(cache, { data }) {
            const { todos } = cache.readQuery<Todos>({ query: TodosSchema })!;

            cache.writeQuery({
                query: TodosSchema,
                data:  { todos: todos.filter(({ id }) => id !== data!.deleteTodo) },
            });
        },
        ...options,
    });
};
