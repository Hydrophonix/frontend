// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Form } from '../../components';

// Instruments
import { accessToken } from '../../apollo';

// Types
import { Register as RegisterResponse } from '../../bus';

// Assets
import { RegisterContainer } from './styles';
import { useLoggedIn } from '../../hooks';

type RegisterProps = {}

const Register: FC<RegisterProps> = () => {
    const { setIsLoggedInToLocalStorage } = useLoggedIn();

    const handleRegister = (response: RegisterResponse) => {
        accessToken(response?.registerWeb?.accessToken);
        setIsLoggedInToLocalStorage(true);
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

