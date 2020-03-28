/* eslint-disable max-len */
// Core
import * as ApolloReactHooks from '@apollo/react-hooks';

// GraphQL
import CreateTodoSchema from '../schemas/createTodo.graphql';
import TodosSchema from '../schemas/todos.graphql';


// Types
import { CreateTodo, CreateTodoVariables, Todos } from '../types';

const defaultOptions: ApolloReactHooks.MutationHookOptions<CreateTodo, CreateTodoVariables> = {
    update(cache, { data }) {
        const { todos } = cache.readQuery<Todos>({ query: TodosSchema })!;

        cache.writeQuery({
            query: TodosSchema,
            data:  { todos: todos.concat([ data!.createTodo ]) },
        });
    },
};

export const useCreateTodoMutation = (baseOptions = defaultOptions) => {
    return ApolloReactHooks.useMutation<CreateTodo, CreateTodoVariables>(CreateTodoSchema, baseOptions);
};
