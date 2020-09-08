// Core
import styled from 'styled-components';

// Styles
import { PageContainer, ContentContainer } from '../styles';

export const TodosContainer = styled(PageContainer)`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 7fr 1fr;
    grid-template-rows: 60px auto 30px auto;
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
    padding: 10px 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.onBackground};
    -webkit-text-stroke: 1px ${({ theme }) => theme.secondary};
`;

export const CreateTodoContainer = styled(ContentContainer)`
    grid-area: create;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
