// Core
import styled from 'styled-components';

export const TodosContainer = styled.div`
    background: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 7fr 1fr;
    grid-template-rows: 50px auto 30px auto;
    grid-template-areas:
        'header header header header header'
        '. create . list .'
        '. . . list .'
        '. control . list .';
`;

export const Header = styled.h2`
    grid-area: header;
    text-align: center;
    vertical-align: center;
    font-size: 24px;
    font-weight: bold;
`;

export const CreateTodoContainer = styled.div`
    grid-area: create;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-style: solid;
    border-width: 2px;
    border-radius: 15px;
`;
