// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useUsersQuery } from '../../bus';

const Home: FC = () => {
    const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>KEK MAIN</p>
            {data?.users.map(({ id, email }, i) => (
                <div key = { id }>
                    {i} : {id} : {email}
                </div>
            ))}
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);
