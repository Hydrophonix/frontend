// Core
import React from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useMeQuery } from '../../bus';

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
            {data?.me?.name}
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Me />
    </ErrorBoundary>
);
