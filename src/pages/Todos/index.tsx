// Core
import React from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { CreateTodo } from './CreateTodo';

// Hooks
import { useTodosQuery } from '../../bus';

// Assets
import { TodosContainer } from './styles';

type TodoProps = {}

const Todo: React.FC<TodoProps> = () => {
    const { data } = useTodosQuery();

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <TodosContainer>
            <h2>TODOS</h2>
            <div>KEK Todo</div>
            <CreateTodo />
            {data?.todos.map((todo) => {
                return <div key = { todo.id }>{todo.title}</div>;
            })}
        </TodosContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Todo />
    </ErrorBoundary>
);
