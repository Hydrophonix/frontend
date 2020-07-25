// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks


// Assets
import { MainContainer, Cell } from './styles';

const Home: FC = () => {
    return (
        <MainContainer>
            {Array(15)
                .fill(1)
                .map((item, i) => <Cell key = { i }>{item + i}</Cell>)}
        </MainContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);
