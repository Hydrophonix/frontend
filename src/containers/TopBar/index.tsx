// Core
import React, { FC } from 'react';

// Components
import { Navigation } from './Navigation';
import { ControlPanel } from './ControlPanel';
import { AuthPanel } from './AuthPanel';

// Assets
import { TopBarContainer, PanelsContainer } from './styles';

interface TopBarProps {}

export const TopBar: FC<TopBarProps> = () => {
    return (
        <TopBarContainer>
            <PanelsContainer>
                <ControlPanel />
                <AuthPanel />
            </PanelsContainer>
            <Navigation />
        </TopBarContainer>
    );
};
