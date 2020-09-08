// Core
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Elements
import { MenuButton } from './MenuButton';
// import { Link } from '../../../elements';

// Instruments
import { ROUTE_PATHS } from '../../../constants';

// Assets
import { NavigationContainer } from '../styles';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    return (
        <NavigationContainer>
            {Object.entries(ROUTE_PATHS).map(([ route, path ])=> {
                if (path === ROUTE_PATHS.Login || path === ROUTE_PATHS.Register || path === ROUTE_PATHS.Profile) {
                    return null;
                }

                return (
                    <MenuButton
                        withSound
                        active = { pathname === path }
                        key = { route }
                        onClick = { () => {
                            push(path);
                        } }>
                        {route}
                    </MenuButton>
                );
            })}
        </NavigationContainer>
    );
};
