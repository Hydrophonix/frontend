// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

// Instruments
import { transformStyleObjectToText } from '../utils';

// Assets
import { menuHoverSound } from '../assets';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLButtonElement>;
    withSound?: boolean;
    styles?: {
        height?: number;
        width?: number;
    }
}

export const Button: FC<ButtonProps> = ({ children, onClick, styles, withSound, ...otherProps }) => {
    if (withSound) {
        const menuSound = new Audio(menuHoverSound);
        // menuSound.volume

        return (
            <Styled
                styles = { styles }
                onClick = { onClick }
                onMouseEnter = { () => menuSound.play() }
                onMouseLeave = { () => false && menuSound.pause() }
                { ...otherProps }>
                {children}
            </Styled>
        );
    }

    return (
        <Styled
            styles = { styles }
            onClick = { onClick }
            { ...otherProps }>
            {children}
        </Styled>
    );
};

const Styled = styled.button<ButtonProps>`
    width: 220px;
    height: 60px;
    border: 2px solid #FFF;
    background-color: #FFF;
    background: radial-gradient(ellipse, #DfDfDf 0%, #FFF 60%);
    /* border-image: linear-gradient(to right, #ffffff, #933a, #724, #ffffff ) 47% 0%; */

    /* border: 2px solid #147; */
    /* border-bottom: 2px solid #FFF; */
    margin: 0 5px;

    &:hover {
        /* background-color: #aaa; */
        /* border-bottom: 2px solid; */
        border-image: linear-gradient(to right, #FFF, #933a, #724, #FFF ) 47% 0%;
        color: #933a;
        background: #FFF;
        cursor: pointer;
    }

    ${({ styles }) => styles ? transformStyleObjectToText(styles) : ''}
`;
