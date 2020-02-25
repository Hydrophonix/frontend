// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import { fonts } from '..';

export default {
    GlobalReset: createGlobalStyle`
    ${reset}
  `,

    GlobalFonts: createGlobalStyle`
      @font-face {
        font-family: PacificoRegular;
        src: url('${fonts.PacificoRegular}') format('opentype');
      }
  `,
};
