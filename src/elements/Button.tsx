// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

// Elements
import { Spinner } from './';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLButtonElement>;
    loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, loading, ...otherProps }) => {
    if (loading) {
        return (
            <Styled
                disabled
                loading
                { ...otherProps }>
                <Spinner />
            </Styled>
        );
    }

    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};

// Styles
const Styled = styled.button<ButtonProps>`
    cursor: pointer;
    outline: none;
    width: 150px;
    height: 40px;
    border-width: 2px;
    border-radius: 8px;
    border-color: ${({ theme, loading }) => loading && theme.secondaryVariant};
    background-color: ${({ theme, loading }) => loading && theme.primaryVariant};

    &:hover {
        border-color: ${({ theme }) => theme.secondaryVariant};
        background-color: ${({ theme }) => theme.primaryVariant};
    }
`;
