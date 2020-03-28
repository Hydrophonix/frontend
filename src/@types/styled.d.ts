// Core
import 'styled-components';

// Assets
import { defaultLight as theme } from '../assets/themes/defaultLight';


declare module 'styled-components' {
    type Theme = typeof theme;

    export interface DefaultTheme extends Theme {}
}
