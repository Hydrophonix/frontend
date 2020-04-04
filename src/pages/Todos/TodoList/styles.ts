// Core
import styled from 'styled-components';

export const TodoListContainer = styled.div`
    grid-area: list;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    background: none;
`;

export const TodoContainer = styled.div`
    min-height: 100px;
    display: grid;
    grid-template-columns: 100px 1fr 16px;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    align-items: center;
    position: relative;
    padding: 5px;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
`;

export const StyledInput = styled.input`
    border: ${(props) => props.disabled ? 'none' : props.theme.secondary};
    color: ${(props) =>  props.disabled ? 'inherit' : props.theme.secondary}
`;

export const StyledSpan = styled.span`
    color: ${({ theme }) => theme.onBackgroundVariant}
`;
