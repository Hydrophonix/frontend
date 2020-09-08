// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Input, Button } from '../../elements';

// Hooks
import { useLoginMutation } from '../../bus';
import { useLoggedIn } from '../../hooks';

// Instruments
import { accessToken } from '../../apollo';

// Assets
import { LoginContainer, AnotherOneContainer } from './styles';
import { PageTitle } from '../styles';

type LoginProps = {}

const Login:FC<LoginProps> = () => {
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ login ] = useLoginMutation();
    const { setIsLoggedInToLocalStorage } = useLoggedIn();

    return (
        <LoginContainer>
            <PageTitle>Login</PageTitle>
            <AnotherOneContainer>
                <Input
                    placeholder = 'Enter your username'
                    value = { name }
                    onChange = { (event) => setName(event.target.value) }
                />
                <Input
                    placeholder = 'Enter your password'
                    type = 'password'
                    value = { password }
                    onChange = { (event) => setPassword(event.target.value) }
                />

                <Button onClick = { async () => {
                    const response = await login({
                        variables: { input: { name, password }},
                    });

                    if (response && response.data) {
                        accessToken(response.data.loginWeb.accessToken);
                        setIsLoggedInToLocalStorage(true, 'Main');
                    }
                } }>
                    Login
                </Button>
            </AnotherOneContainer>
        </LoginContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Login />
    </ErrorBoundary>
);
