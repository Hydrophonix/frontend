// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Input, Button } from '../../elements';

// Hooks
import { useLoggedIn } from '../../hooks';
import { useRegisterMutation } from '../../bus';

// Instruments
import { accessToken } from '../../apollo';

// Assets
import { LoginContainer, AnotherOneContainer } from '../Login/styles';
import { PageTitle } from '../styles';

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register ] = useRegisterMutation();
    const { setIsLoggedInToLocalStorage } = useLoggedIn();

    return (
        <LoginContainer>
            <PageTitle>Register</PageTitle>
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
                    const response = await register({
                        variables: { input: { name, password }},
                    });

                    if (response && response.data) {
                        accessToken(response.data.registerWeb.accessToken);
                        setIsLoggedInToLocalStorage(true, 'Main');
                    }
                } }>
                    Register
                </Button>
            </AnotherOneContainer>
        </LoginContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);

