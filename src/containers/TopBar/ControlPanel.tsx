// Core
import React, { FC, memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Elements
import { Toggle } from '../../elements';

// Assets
import { ControlPanelContainer } from './styles';

export interface ControlPanelProps {
    isDefaultTheme: boolean;
    toggleDefaultTheme: Function;
}

export const ControlPanel: FC<ControlPanelProps> = memo(({ isDefaultTheme, toggleDefaultTheme }) => {
    const [ isSunHover, setIsSunHover ] = useState(false);
    const [ isMoonHover, setIsMoonHover ] = useState(false);

    return (
        <ControlPanelContainer>
            <FontAwesomeIcon
                icon = 'sun'
                size = 'lg'
                spin = { isSunHover }
                onMouseEnter = { () => setIsSunHover(true) }
                onMouseLeave = { () => setIsSunHover(false) }
            />
            <Toggle
                active = { isDefaultTheme }
                onChange = { toggleDefaultTheme }
            />
            <FontAwesomeIcon
                // pulse
                color = '#a3a'
                icon = 'moon'
                size = 'lg'
                spin = { isMoonHover }
                title = 'kek'
                onMouseEnter = { () =>setIsMoonHover(true) }
                onMouseLeave = { () => setIsMoonHover(false) }
            />
        </ControlPanelContainer>
    );
});
