// Core
import { MutationHookOptions, useMutation } from '@apollo/react-hooks';

// GraphQL
import TodosSchema from '../schemas/todos.graphql';
import CreateTodoSchema from '../schemas/createTodo.graphql';

// Types
import { CreateTodo, CreateTodoVariables, Todos } from '../types';

const defaultOptions: MutationHookOptions<CreateTodo, CreateTodoVariables> = {
    update(cache, { data }) {
        const { todos } = cache.readQuery<Todos>({ query: TodosSchema })!;

        cache.writeQuery({
            query: TodosSchema,
            data:  { todos: todos.concat([ data!.createTodo ]) },
        });
    },
};

export const useCreateTodoMutation = (baseOptions = defaultOptions) => {
    return useMutation<CreateTodo, CreateTodoVariables>(CreateTodoSchema, baseOptions);
};
