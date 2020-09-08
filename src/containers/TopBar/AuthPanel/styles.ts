// Core
import styled from 'styled-components';

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 2px solid ${({ theme: { surface }}) => surface};
    background-color: ${({ theme: { primary }}) => primary};
    box-shadow: ${({ theme : { surface }}) => `0 0 7px 0px ${surface}`};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const UserName = styled.span`
    padding: 5px;
`;
