// Core
import { createGlobalStyle } from 'styled-components';

// import appBackgroundSvg from '../svg/hexaGraphene.svg';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Helvetica Neue Normal';
    src: url('./fonts/HelveticaNeueCyr-Roman.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body, button, input, div {
    background-color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.onBackground};
    font-size: 1rem;
    font-family: 'Helvetica Neue Normal', sans-serif;
    letter-spacing: .4px
}


`;
/* body {
    background-image: url(${appBackgroundSvg});
} */
// body,
