// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

// Assets
import { menuHoverSound } from '../../../assets';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLButtonElement>;
    withSound?: boolean;
    active?: boolean;
}

export const MenuButton: FC<ButtonProps> = ({ children, withSound, ...otherProps }) => {
    if (withSound) {
        const menuSound = new Audio(menuHoverSound);
        // menuSound.volume

        return (
            <Styled
                onMouseEnter = { () => menuSound.play() }
                onMouseLeave = { () => false && menuSound.pause() }
                { ...otherProps }>
                {children}
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
    width: 220px;
    height: 60px;
    margin: 0 20px;
    border-width: 2px;
    border-radius: 20px;
    background-color: ${({ theme, active }) => active && theme.primaryVariant};
    border-color: ${({ theme, active }) => active && theme.secondaryVariant};
    border-style: ${({ active }) => active && 'inset'};
    box-shadow: ${({ theme : { surface }}) => `1px 1px 9px 0px ${surface}`};

    &:hover, &:focus {
        background-color: ${({ theme }) => theme.primaryVariant};
        border-color: ${({ theme }) => theme.secondaryVariant};
    }
`;
