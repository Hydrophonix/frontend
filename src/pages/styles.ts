// Core
import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    background: none;
`;

export const PageTitle = styled.h2`
    margin: 10px 0;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.onBackground};
    -webkit-text-stroke: 1px ${({ theme }) => theme.secondary};
`;

export const ContentContainer = styled.div`
    padding: 15px;
    border-style: solid;
    border-width: 2px;
    border-radius: 15px;
    box-shadow: ${({ theme : { surface }}) => `1px 1px 9px 0px ${surface}`};
`;

export const PageContentContainer = styled(ContentContainer)`
    margin: 0 auto;
    width: 70%;
    overflow-y: auto;
`;

export const H2 = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    margin: 10px 0;
`;

export const H3 = styled.h3`
    font-size: 1.3rem;
    margin: 5px 0 5px 10px;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.secondary} 
`;

export const P = styled.p`
    font-size: 1.1rem;
    margin: 2px 0;
    font-weight: normal;
`;
