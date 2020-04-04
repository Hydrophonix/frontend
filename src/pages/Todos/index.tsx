// Core
import React from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { CreateTodo } from './CreateTodo';
import { TodoList } from './TodoList';

// Assets
import { TodosContainer, Header } from './styles';

type TodoProps = {}

const Todo: React.FC<TodoProps> = () => {
    return (
        <TodosContainer>
            <Header>TODOS</Header>
            <CreateTodo />
            <TodoList />
        </TodosContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Todo />
    </ErrorBoundary>
);
