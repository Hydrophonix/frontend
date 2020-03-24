// Core
import React, { FC, memo } from 'react';

// Hooks
import { useCreateTodoMutation } from '../../bus';

interface CreateTodoProps {}

export const CreateTodo: FC<CreateTodoProps> = memo(() => {
    const [ createTodo ] = useCreateTodoMutation();


    return (
        <>

        </>
    );
});
