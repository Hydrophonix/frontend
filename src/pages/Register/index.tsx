// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Form } from '../../components';

// Hooks
import { Register as RegisterResponse } from '../../bus';

// Instruments
import { setAccessToken } from '../../tokenStore';

// Assets
import { RegisterContainer } from './styles';

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
    const handleRegister = (response: RegisterResponse) => {
        setAccessToken(response?.registerWeb?.accessToken);
    };

    return (
        <RegisterContainer>
            <div>KEK Register</div>
            <Form
                buttonText = 'Register'
                callback = { handleRegister }
                mutation = 'register'
            />
        </RegisterContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);

