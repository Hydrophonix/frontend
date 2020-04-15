// Core
import React, { FC, useState } from 'react';

// Elements
import { Icon } from '../../../elements';

// Hooks
import { useUpdateTodoMutation, useDeleteTodoMutation } from '../../../bus';

// Instruments
import { formatInputForComponent, formatInputForServer } from '../../../utils';

// Types
import { Todos_todos } from '../../../bus/Todo/types';

// Assets
import { TodoContainer, StyledInput, StyledSpan } from './styles';
import { useForm } from '../../../hooks';

interface TodoProps extends Todos_todos {}

export const Todo: FC<TodoProps> = ({ title, text, id, done }) => {
    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ input, setInput ] = useForm(formatInputForComponent({ title, text }));

    const [ deleteTodo ] = useDeleteTodoMutation();
    const [ updateTodo ] = useUpdateTodoMutation();

    return (
        <TodoContainer>
            {/* 1st row */}
            <StyledSpan>Title: </StyledSpan>
            <StyledInput
                disabled = { !isEditMode }
                name = 'title'
                value = { input.title }
                onChange = { setInput }
            />
            <Icon
                active = { done }
                icon = 'compact-disc'
                onClick = { () => updateTodo({ variables: { id, input: { done: !done }}}) }
            />
            {/* 2nd row */}
            <StyledSpan>Text: </StyledSpan>
            <StyledInput
                disabled = { !isEditMode }
                name = 'text'
                value = { input.text }
                onChange = { setInput }
            />
            <Icon
                icon = 'edit'
                onClick = { () => {
                    if (isEditMode) {
                        setIsEditMode(false);

                        updateTodo({ variables: { id, input: formatInputForServer(input) }});
                    } else {
                        setIsEditMode(true);
                    }
                } }
            />
            {/* 3rd row */}
            <StyledSpan>Last updated: </StyledSpan>
            <StyledSpan>{id}</StyledSpan>
            <Icon
                icon = 'trash-alt'
                onClick = { () => deleteTodo({ variables: { id }}) }
                onHoverColor = 'error'
            />
        </TodoContainer>
    );
};

