// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks


// Assets
import { PageTitle } from '../styles';
import { MainContainer } from './styles';

const Home: FC = () => {
    return (
        <MainContainer>
            <PageTitle>About project</PageTitle>
        </MainContainer>
    );
};


export default () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);
