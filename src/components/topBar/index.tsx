// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../../generated/graphql';
import { setAccessToken } from '../../tokenStore';

type Props = {};

export const TopBar: React.FC<Props> = () => {
    const [ logout, { client }] = useLogoutMutation();

    return (
        <div>
            <h1>HEADER</h1>
            <div><Link to = '/home'>Home</Link></div>
            <div><Link to = '/register'>Register</Link></div>
            <div><Link to = '/login'>Login</Link></div>
            <div><Link to = '/me'>Me</Link></div>
            <h1>HEADER</h1>
            <div>
                <button onClick = { async () => {
                    await logout();
                    await client?.clearStore();
                    setAccessToken('');
                } }>LOGOUT
                </button>
            </div>
        </div>
    );
};
