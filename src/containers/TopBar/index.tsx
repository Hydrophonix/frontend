// Core
import React, { FC } from 'react';

// Components
import { Navigation } from './Navigation';
import { ControlPanel } from './ControlPanel';

// Assets
import { TopBarContainer } from './styles';

interface TopBarProps {}

export const TopBar: FC<TopBarProps> = () => {
    return (
        <TopBarContainer>
            <ControlPanel />
            <Navigation />
        </TopBarContainer>
    );
};
