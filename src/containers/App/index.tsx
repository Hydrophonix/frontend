// Core
import React, { useEffect, useMemo, FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

// Components
// import { Toolbar } from '../../components';

// Pages
import { Main } from '../../pages';

// Hooks
// import { useLocalStorage } from '../../hooks';

// Theme
// import { themes } from '../../theme';

// Styles
// import S from './styles';
// import G from '../../assets/globalStyles';

export const App: FC = () => {
    // const [ themeName, setThemeName ] = useLocalStorage('theme', 'lightTheme');

    useEffect(() => {
        console.log('App');
    });

    // const theme = useMemo(() => themes[ themeName ], [ themeName ]);

    return (
        // <ThemeProvider theme = { theme }>
        //     <G.GlobalReset />
        //     <G.GlobalFonts />
        //     <S.AppContainer>
        //         <Toolbar
        //             setThemeName = { setThemeName }
        //             themeName = { themeName }
        //         />
                <Switch>
                    <Route
                        component = { Main }
                        path = '/main'
                    />
                    <Redirect to = '/main' />
                </Switch>
        //     </S.AppContainer>
        // </ThemeProvider>
    );
};
