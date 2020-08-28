// Core
import React, { FC } from 'react';
import download from 'downloadjs';

// Components
import { ErrorBoundary } from '../../components';

// Hooks

// Assets
import { MainContainer, ProjectContainer } from './styles';
import { API_URL } from '../../constants';
import { PageTitle } from '../styles';

const Resume: FC = () => {
    return (
        <MainContainer>
            <PageTitle>Resume</PageTitle>
        </MainContainer>
    );
};


export default () => (
    <ErrorBoundary>
        <Resume />
    </ErrorBoundary>
);
