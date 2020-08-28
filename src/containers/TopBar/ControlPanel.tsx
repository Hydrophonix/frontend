// Core
import React, { FC, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';

// Elements
import { Toggle } from '../../elements';

// Hooks
import { useAppState } from '../../context';
import { useDarkMode } from '../../hooks';

// Assets
import { ControlPanelContainer, Flex } from './styles';

export const ControlPanel: FC = () => {
    const [ isSunHover, setIsSunHover ] = useState(false);
    const [ isMoonHover, setIsMoonHover ] = useState(false);
    const { secondary, primaryVariant } = useContext(ThemeContext);
    const { isDarkMode } = useAppState();
    const { setIsDarkModeToLocalStorage } = useDarkMode();

    return (
        <ControlPanelContainer>
            <Flex>
                <FontAwesomeIcon
                    color = { isDarkMode ? primaryVariant : secondary  }
                    cursor = 'pointer'
                    icon = 'sun'
                    size = 'lg'
                    spin = { isDarkMode && isSunHover }
                    title = 'Light Theme'
                    onClick = { () =>  setIsDarkModeToLocalStorage(false) }
                    onMouseEnter = { () => setIsSunHover(true) }
                    onMouseLeave = { () => setIsSunHover(false) }
                />
                <Toggle
                    reverse
                    active = { !isDarkMode }
                    onChange = { setIsDarkModeToLocalStorage }
                />
                <FontAwesomeIcon
                    color = { isDarkMode ? secondary : primaryVariant }
                    cursor = 'pointer'
                    icon = 'moon'
                    size = 'lg'
                    spin = { !isDarkMode && isMoonHover }
                    title = 'Dark Theme'
                    onClick = { () =>  setIsDarkModeToLocalStorage(true) }
                    onMouseEnter = { () => setIsMoonHover(true) }
                    onMouseLeave = { () => setIsMoonHover(false) }
                />
            </Flex>
            <Flex>
                <FontAwesomeIcon
                    color = { isDarkMode ? primaryVariant : secondary }
                    cursor = 'pointer'
                    icon = 'sun'
                    size = 'lg'
                    spin = { isDarkMode && isSunHover }
                    title = 'Light Theme'
                    onClick = { () =>  setIsDarkModeToLocalStorage(false) }

                />
                <Toggle
                    reverse
                    active = { !isDarkMode }
                    onChange = { setIsDarkModeToLocalStorage }
                />
                <FontAwesomeIcon
                    color = { isDarkMode ? secondary : primaryVariant }
                    cursor = 'pointer'
                    icon = 'moon'
                    size = 'lg'
                    spin = { !isDarkMode && isMoonHover }
                    title = 'Dark Theme'
                    onClick = { () =>  setIsDarkModeToLocalStorage(true) }
                />
            </Flex>
        </ControlPanelContainer>
    );
};
