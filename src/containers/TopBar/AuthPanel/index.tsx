// Core
import React, { FC } from 'react';

// Components
import { Auth } from './Auth';
import { User } from './User';

// Hooks
import { useAppState } from '../../../context';

// Asssets
import { PanelContainer } from '../styles';

export const AuthPanel: FC = () => {
    const { isLoggedIn } = useAppState();

    return (
        <PanelContainer>
            {
                isLoggedIn
                    ? <User/>
                    : <Auth/>
            }
        </PanelContainer>

    );
};
