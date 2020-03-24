// Core
import React, { useEffect } from 'react';

// Components
import { Navigation } from './Navigation';
import { ControlPanel, ControlPanelProps } from './ControlPanel';

// Hooks
import { useLogoutMutation } from '../../bus';

// Instruments
import { setAccessToken } from '../../tokenStore';

// Assets
import { TopBarContainer } from './styles';

interface TopBarProps extends ControlPanelProps {}

export const TopBar: React.FC<TopBarProps> = ({ isDefaultTheme, toggleDefaultTheme }) => {
    const [ logout, { client }] = useLogoutMutation();

    useEffect(() => {
        console.log('TOPBAR RENDER');
    });

    return (
        <TopBarContainer>
            <ControlPanel
                isDefaultTheme = { isDefaultTheme }
                toggleDefaultTheme = { toggleDefaultTheme }
            />
            <Navigation />
            <div>
                <button onClick = { async () => {
                    await logout();
                    await client?.clearStore();
                    setAccessToken('');
                } }>LOGOUT
                </button>
            </div>
        </TopBarContainer>
    );
};
