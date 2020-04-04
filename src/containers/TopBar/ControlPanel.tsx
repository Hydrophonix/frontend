// Core
import React, { FC, memo, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';

// Elements
import { Toggle } from '../../elements';

// Assets
import { ControlPanelContainer } from './styles';

export interface ControlPanelProps {
    isDefaultTheme: boolean;
    setIsDefaultTheme: (value: boolean) => void;
}

export const ControlPanel: FC<ControlPanelProps> = memo(({ isDefaultTheme, setIsDefaultTheme }) => {
    const [ isSunHover, setIsSunHover ] = useState(false);
    const [ isMoonHover, setIsMoonHover ] = useState(false);
    const { secondary, primaryVariant } = useContext(ThemeContext);

    return (
        <ControlPanelContainer>
            <FontAwesomeIcon
                color = { isDefaultTheme ? secondary : primaryVariant }
                cursor = 'pointer'
                icon = 'sun'
                size = 'lg'
                spin = { !isDefaultTheme && isSunHover }
                title = 'Light Theme'
                onClick = { () =>  setIsDefaultTheme(true) }
                onMouseEnter = { () => setIsSunHover(true) }
                onMouseLeave = { () => setIsSunHover(false) }
            />
            <Toggle
                active = { isDefaultTheme }
                onChange = { setIsDefaultTheme }
            />
            <FontAwesomeIcon
                color = { isDefaultTheme ? primaryVariant : secondary }
                cursor = 'pointer'
                icon = 'moon'
                size = 'lg'
                spin = { isDefaultTheme && isMoonHover }
                title = 'Dark Theme'
                onClick = { () =>  setIsDefaultTheme(false) }
                onMouseEnter = { () => setIsMoonHover(true) }
                onMouseLeave = { () => setIsMoonHover(false) }
            />
        </ControlPanelContainer>
    );
});
