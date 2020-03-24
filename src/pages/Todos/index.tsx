// Core
import React from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useTodosQuery } from '../../bus';

// Assets
import { TodosContainer } from './styles';

type TodoProps = {}

const Todo: React.FC<TodoProps> = () => {
    const { data, loading } = useTodosQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <TodosContainer>
            <h2>TODOS</h2>
            <div>KEK Todo</div>
            {data?.todos.map((todo) => {
                <div>{todo.title}</div>;
            })}
        </TodosContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Todo />
    </ErrorBoundary>
);
