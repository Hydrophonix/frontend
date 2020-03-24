// Core
import React, { useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { Switch } from '../../elements';

// Hooks
import { useUsersQuery } from '../../bus';

const Home: React.FC = () => {
    const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

    const [ checked, setCkecked ] = useState(false);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Switch
                checked = { checked }
                onChange = { setCkecked }
            />
            <p>KEK MAIN</p>
            {data && data.users.map(({ id, email }, i) => (
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
