// Core
import React, { FC, useContext } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

// Instruments
import { ROUTE_PATHS } from '../constants';

type StyledLinkProps = Omit<LinkProps, 'to'> & React.RefAttributes<HTMLAnchorElement> & {
    to: keyof typeof ROUTE_PATHS;
    noUnderline?: boolean;
}

export const Link: FC<StyledLinkProps> = ({ to, noUnderline, style,  ...restProps }) => {
    const { onBackground } = useContext(ThemeContext);

    return (
        <RouterLink
            style = {{
                color:               onBackground,
                padding:             '5px',
                textDecoration:      noUnderline ? 'none' : 'underline',
                textDecorationWidth: '3px',
                ...style,
            }}
            to = { ROUTE_PATHS[ to ] }
            { ...restProps }
        />
    );
};
