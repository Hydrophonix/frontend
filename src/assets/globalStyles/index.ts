// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
// import { fonts } from '..';

export const GlobalReset = createGlobalStyle`
    ${reset}
`;

// export const GlobalFonts = createGlobalStyle`
//     @font-face {
//         font-family: PacificoRegular;
//         src: url('${fonts.PacificoRegular}') format('opentype');
//     }
// `;
