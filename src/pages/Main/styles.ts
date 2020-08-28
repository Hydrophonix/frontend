// Core
import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
`;
// export const MainContainer = styled.div`
//     margin: 0 auto;
//     width: 70%;
//     display: grid;
//     grid-template-columns: 40px 50px auto 50px 40px;
//     grid-template-rows: 25% 200px auto;
// `;
export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 140px auto;
    grid-template-rows: auto;
`;

export const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme })=> theme.error}
`;

