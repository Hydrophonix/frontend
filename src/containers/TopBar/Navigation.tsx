// Core
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Elements
import { Button } from '../../elements';

// Instruments
import { ROUTE_PATH } from '../../constants';

// Assets
import { NavigationContainer } from './styles';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    return (
        <NavigationContainer>
            {Object.entries(ROUTE_PATH).map(([ route, path ])=> (
                <Button
                    withSound
                    active = { pathname === path }
                    key = { route }
                    onClick = { () => {
                        push(path);
                    } }>
                    {route}
                </Button>
            ))}
        </NavigationContainer>
    );
};
