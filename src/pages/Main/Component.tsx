// Core
import React from 'react';

// Hooks
import { useUsersQuery } from '../../generated/graphql';

const Home: React.FC = () => {
    const { data, loading, error } = useUsersQuery({
        fetchPolicy: 'network-only',
    });

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

export default Home;
