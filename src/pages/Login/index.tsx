// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useLoginMutation } from '../../bus';
import { useLoggedIn } from '../../hooks';

// Instruments
import { accessToken } from '../../apollo';

type LoginProps = {}

const Login:FC<LoginProps> = () => {
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ login ] = useLoginMutation();
    const { setIsLoggedInToLocalStorage } = useLoggedIn();

    return (
        <div>
            <div>KEK LOGIN</div>
            <form onSubmit = { async (event) => {
                event.preventDefault();
                const response = await login({
                    variables: { input: { name, password }},
                });

                if (response && response.data) {
                    accessToken(response.data.loginWeb.accessToken);
                    setIsLoggedInToLocalStorage(true);
                }
            } }>
                <div>
                    <input
                        placeholder = 'enter email'
                        value = { name }
                        onChange = { (event) => setName(event.target.value) }
                    />
                </div>
                <div>
                    <input
                        placeholder = 'enter password'
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                </div>
                <div>
                    <button type = 'submit'>Login!1!</button>
                </div>
            </form>
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Login />
    </ErrorBoundary>
);
