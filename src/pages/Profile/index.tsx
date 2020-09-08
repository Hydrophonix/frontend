// Core
import React, { FC, useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Spinner, Input, Button } from '../../elements';

// Hooks
import { useLoggedIn } from '../../hooks';
import { useMeQuery, useLogoutMutation, useUpdateMeMutation } from '../../bus';

// Assets
import { PageTitle, ContentContainer } from '../styles';
import { ProfileContainer, InputContainer } from './styles';

type MeProps = {}

const Me: FC<MeProps> = () => {
    const { data, loading } = useMeQuery();
    const [ logout ] = useLogoutMutation();
    const { setIsLoggedInToLocalStorage } = useLoggedIn();
    const [ updateMe ] = useUpdateMeMutation();
    const [ name, setName ] = useState(data?.me.name);

    useEffect(() => setName(data?.me.name), [ data?.me.name ]);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <ProfileContainer>
            <PageTitle>Profile</PageTitle>
            <ContentContainer>
                <InputContainer>
                    <span>Username:</span>
                    <Input
                        value = { name }
                        onChange = { (event) => setName(event.target.value) }
                    />
                </InputContainer>
                <InputContainer>
                    <Button onClick = { () => updateMe({ variables: { input: { name }}}) }>
                        Update
                    </Button>
                    <Button onClick = { async () => {
                        await logout();
                        setIsLoggedInToLocalStorage(false, 'Login');
                    } }>
                        Logout
                    </Button>
                </InputContainer>
            </ContentContainer>
        </ProfileContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Me />
    </ErrorBoundary>
);
