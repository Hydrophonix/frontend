// Core
import styled from 'styled-components';

// Assets
import { PageContainer } from '../styles';

export const ResumeContainer = styled(PageContainer)`
    display: flex;
    flex-direction: column;
`;

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: auto;
    grid-gap: 10px;
    margin: 10px 0;
`;

export const Line = styled.div`
    border-style: solid;
    border-width: 1px;
`;

