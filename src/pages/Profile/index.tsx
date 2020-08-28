// Core
import React, { FC } from 'react';
import { useSpring, animated } from 'react-spring';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useMeQuery, useLogoutMutation } from '../../bus';

// Assets
import { PageTitle } from '../styles';
import { ProfileContainer } from './styles';
import { useLoggedIn } from '../../hooks';

type MeProps = {}

const Me: FC<MeProps> = () => {
    const animation = useSpring({
        from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
        to:   async (next) => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' });
                await next({ height: '50%', background: 'lightgreen' });
                await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' });
                await next({ top: '0%', height: '100%', background: 'lightpink' });
                await next({ top: '50%', height: '50%', background: 'lightsalmon' });
                await next({ width: '100%', left: '0%', background: 'lightcoral' });
                await next({ width: '50%', background: 'lightseagreen' });
                await next({ top: '0%', height: '100%', background: 'lightskyblue' });
                await next({ width: '100%', background: 'lightslategrey' });
            }
        },
    });
    const { data, loading } = useMeQuery();
    const [ logout ] = useLogoutMutation();
    const { setIsLoggedInToLocalStorage } = useLoggedIn();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ProfileContainer>
            <PageTitle>Profile</PageTitle>

            {data?.me?.name}
            <button onClick = { async () => {
                await logout();
                setIsLoggedInToLocalStorage(false);
            } }>
                logout
            </button>
            <div style = {{ width: 388, height: 388 }}>
                <animated.div style = { animation }></animated.div>
            </div>
        </ProfileContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Me />
    </ErrorBoundary>
);
