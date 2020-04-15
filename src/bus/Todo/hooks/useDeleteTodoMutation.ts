// Core
import { MutationHookOptions, useMutation } from '@apollo/react-hooks';

// GraphQL
import TodosSchema from '../schemas/todos.graphql';
import DeleteTodoSchema from '../schemas/deleteTodo.graphql';

// Types
import { DeleteTodo, DeleteTodoVariables, Todos } from '../types';

const defaultOptions: MutationHookOptions<DeleteTodo, DeleteTodoVariables> = {
    update(cache, { data }) {
        const { todos } = cache.readQuery<Todos>({ query: TodosSchema })!;

        cache.writeQuery({
            query: TodosSchema,
            data:  { todos: todos.filter(({ id }) => id !== data!.deleteTodo) },
        });
    },
};

export const useDeleteTodoMutation = (baseOptions = defaultOptions) => {
    return useMutation<DeleteTodo, DeleteTodoVariables>(DeleteTodoSchema, baseOptions);
};
