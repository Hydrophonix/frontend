// Core
import React, { FC, memo } from 'react';

// Components
import { Form } from '../../components';

// Assets
import { CreateTodoContainer, Header } from './styles';

interface CreateTodoProps {}

export const CreateTodo: FC<CreateTodoProps> = memo(() => {
    return (
        <CreateTodoContainer>
            <Header style = {{ marginBottom: 10 }}>Add todo</Header>
            <Form
                buttonText = 'Add todo'
                mutation = 'createTodo'
            />
        </CreateTodoContainer>
    );
});
