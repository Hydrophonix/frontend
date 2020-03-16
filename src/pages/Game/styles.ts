// Core
import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
`;

export const Cell = styled.td`
    border: 1px solid #000;
    height: 15px;
    width: 15px;
    background-color: ${(props) => props.value ? '#272' : '#FFF'};
    transition: ${(props) => `background-color ${props.transition}ms ease-in-out`};
    /* transition: background-color 0.05s ease-in-out; */
`;

export const ControlPanel = styled.div`
    padding: 15px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #BBB;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
