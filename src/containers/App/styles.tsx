// Core
import styled from 'styled-components';

export default {
    AppContainer: styled.section`
        height: 100vh;
        box-sizing: border-box;
        ${({ theme }) => ({ ...theme.appStyles})}
    `,
};
