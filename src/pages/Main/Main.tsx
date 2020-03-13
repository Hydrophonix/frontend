// Core
import React from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useUsersQuery } from '../../bus';

const Home: React.FC = () => {
    // const { data, loading, error } = useQuery<(usersQuery, { fetchPolicy: 'network-only'});
    const { data, loading, error } = useUsersQuery({ fetchPolicy: 'network-only'});
    // console.log('"|_(ʘ_ʘ)_/" =>: Home:React.FC -> data', data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>err</div>;
    }

    return (
        <div>
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
