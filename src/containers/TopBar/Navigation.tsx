// Core
import React, { FC, memo } from 'react';
import { useHistory } from 'react-router-dom';

// Elements
import { Button } from '../../elements';

// Assets
import { NavigationContainer } from './styles';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = memo(() => {
    const history = useHistory();

    return (
        <NavigationContainer>
            <Button
                withSound
                onClick = { () => history.push('/home') }>
                Home
            </Button>
            <Button
                withSound
                onClick = { () => history.push('/register') }>
                Register
            </Button>
            <Button
                withSound
                onClick = { () => history.push('/login') }>
                Login
            </Button>
            <Button
                withSound
                onClick = { () => history.push('/me') }>
                Me
            </Button>
            <Button
                withSound
                onClick = { () => history.push('/game') }>
                GAME
            </Button>
            <Button
                withSound
                onClick = { () => history.push('/todos') }>
                Todo
            </Button>
        </NavigationContainer>
    );
});
