// Core
import React from 'react';

// Hooks
import { useMeQuery } from '../../generated/graphql';

type MeProps = {}

const Me: React.FC<MeProps> = () => {
    const { data, loading, error } = useMeQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log('"|_(ʘ_ʘ)_/" =>: error', error);

        return <div>Big err</div>;
    }

    return (
        <div>
            <p>KEK me</p>
            <div>KEK Me</div>
            {data?.me?.email}
        </div>
    );
};

export default Me;
