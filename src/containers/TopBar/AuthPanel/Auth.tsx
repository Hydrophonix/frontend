// Core
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import { Avatar } from './styles';
import { Link } from '../../../elements';

export const Auth: FC = () => {
    return (
        <>
            <Link to = 'Login'>Login</Link>
            <Link to = 'Register'>Register</Link>
            <Link to = 'Login'>
                <Avatar>
                    <FontAwesomeIcon
                        icon = 'user'
                        size = '1x'
                    />
                </Avatar>
            </Link>
        </>
    );
};
