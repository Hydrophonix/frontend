// Core
import React, { FC } from 'react';

// Components
import { Todo } from './Todo';

// Elements
import { Spinner } from '../../../elements';

// Hooks
import { useTodosQuery } from '../../../bus';

// Assets
import { TodoListContainer } from './styles';

interface TodoListProps {}

export const TodoList: FC<TodoListProps> = () => {
    const { data, loading } = useTodosQuery();
    console.log('"|_(ʘ_ʘ)_/" =>: data', data);

    return (
        <TodoListContainer>
            {loading
                ? <Spinner />
                : data?.todos.map((todo) => (
                    <Todo
                        key = { todo.id }
                        { ...todo }
                    />
                ))}
        </TodoListContainer>
    );
};
