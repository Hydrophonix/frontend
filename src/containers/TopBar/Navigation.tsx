// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Elements
import { Button } from '../../elements';

// Instruments
import { RoutesPath } from '../Routes';

// Assets
import { NavigationContainer } from './styles';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
    const { push, location: { pathname }} = useHistory();

    return (
        <NavigationContainer>
            {Object.entries(RoutesPath).map(([ route, path ])=> (
                <Button
                    withSound
                    active = { pathname === path }
                    key = { route }
                    onClick = { () => push(path) }>
                    {route}
                </Button>
            ))}
        </NavigationContainer>
    );
};
