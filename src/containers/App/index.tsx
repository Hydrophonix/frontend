// Core
import React, { useEffect, FC, useState } from 'react';

// Containers
import { Routes } from '../Routes';

// Instruments
import { setAccessToken } from '../../tokenStore';
import { TOKEN_URL } from '../../constants';

export const App: FC = () => {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(TOKEN_URL, { credentials: 'include', method: 'POST' })
            .then(async (res) => {
                const { accessToken, ok } = await res.json();
                console.log('"|_(ʘ_ʘ)_/" =>: App:FC -> ok', ok);
                setAccessToken(accessToken);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Routes />
        </>
    );
};
