// Core
import React, { FC, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';

// Hooks
// import { useUpdateTodoMutation } from '../../../bus';

// Types
import { Todos_todos } from '../../../bus/Todo/types';

// Assets
import { TodoContainer, StyledInput, StyledSpan } from './styles';

interface TodoProps extends Todos_todos {}

export const Todo: FC<TodoProps> = ({ title, text, id }) => {
    const { primaryVariant } = useContext(ThemeContext);
    const [ isEditMode, setIsEditMode ] = useState(false);

    return (
        <TodoContainer>
            {/* 1st row */}
            <StyledSpan>Title: </StyledSpan>
            <StyledInput
                disabled = { !isEditMode }
                value = { title }
            />
            <FontAwesomeIcon
                color = { primaryVariant }
                cursor = 'pointer'
                icon = 'compact-disc'
            />
            {/* 2nd row */}
            <StyledSpan>Text: </StyledSpan>
            <StyledInput
                disabled = { !isEditMode }
                value = { text }
            />
            <FontAwesomeIcon
                cursor = 'pointer'
                icon = 'edit'
                onClick = { () => setIsEditMode((state) => !state) }
            />
            {/* 3rd row */}
            <StyledSpan>Last updated: </StyledSpan>
            <StyledSpan>{id}</StyledSpan>
            <FontAwesomeIcon
                cursor = 'pointer'
                icon = 'trash-alt'
            />
        </TodoContainer>
    );
};

