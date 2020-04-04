// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useUsersQuery } from '../../bus';

// Assets
import { MainContainer, Cell } from './styles';

const Home: FC = () => {
    const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <MainContainer>
            {/* <p>KEK MAIN</p> */}
            {data?.users.map(({ id, email }, i) => (
                <div key = { id }>
                    {i} : {id} : {email}
                </div>
            ))}
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
