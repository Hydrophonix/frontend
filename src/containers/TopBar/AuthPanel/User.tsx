// Core
import React, { FC } from 'react';

// Hooks
import { useMeQuery } from '../../../bus';

// Assets
import { Avatar, UserName } from './styles';
import { Link } from '../../../elements';

export const User: FC = () => {
    const { data } = useMeQuery();

    return (
        <>
            <UserName>
                {data?.me.name}
            </UserName>
            <Link
                noUnderline
                to = 'Profile'>
                <Avatar>
                    {data?.me.name[0].toUpperCase()}
                </Avatar>
            </Link>
        </>
    );
};
