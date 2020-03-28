// Core
import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vm;
    background: ${({ theme }) => {
        console.log('"|_(ʘ_ʘ)_/" =>: theme', theme);

        return 'linear-gradient(135deg, #959595 0%,#0d0d0d 46%,#010101 50%,#0a0a0a 53%,#4e4e4e 76%,#383838 87%,#1b1b1b 100%);';
    } };
`;
