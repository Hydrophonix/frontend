// Core
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

// Hooks
import { useAppState } from '../../context';

// Assets
import { GlobalStyles, StylesReset, lightTheme, darkTheme } from '../../assets';

export const AppThemeProvider: FC = ({ children }) => {
    const { isDarkMode } = useAppState();
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme = { theme }>
            <StylesReset />
            <GlobalStyles />
            { children }
        </ThemeProvider>
    );
};
