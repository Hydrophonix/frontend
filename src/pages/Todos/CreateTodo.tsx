// Core
import React, { FC, memo, useState } from 'react';

// Hooks
import { useCreateTodoMutation } from '../../bus';

interface CreateTodoProps {}

export const CreateTodo: FC<CreateTodoProps> = memo(() => {
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    const [ createTodo, { error }] = useCreateTodoMutation();

    if (error) {
        console.log('"|_(ʘ_ʘ)_/" =>: error', error.stack);
        console.log('"|_(ʘ_ʘ)_/" =>: error', error.graphQLErrors);
        console.log('"|_(ʘ_ʘ)_/" =>: error', error.message);
    }


    return (
        <div>
            <input
                type = 'text'
                value = { title }
                onChange = { (event) => setTitle(event.target.value) }
            />
            <input
                type = 'text'
                value = { text }
                onChange = { (event) => setText(event.target.value) }
            />
            <button onClick = { async () => {
                const result = await createTodo({
                    variables: {
                        input: { text, title },
                    },
                });
                console.log('"|_(ʘ_ʘ)_/" =>: result', result.errors);
            } }>Kek create todo
            </button>
        </div>
    );
});
