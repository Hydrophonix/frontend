// Core
import React, { FC, ReactNode, memo } from 'react';
import styled from 'styled-components';

// Instruments
import { transformStyleObjectToText } from '../utils';

// Assets
import { menuHoverSound } from '../assets';

type ButtonProps = {
    children?: ReactNode;
    onClick: Function;
    withSound?: boolean;
    styles?: {
        height?: number;
        width?: number;
    }
}

export const Button: FC<ButtonProps> = memo(({ children, onClick, styles, withSound }) => {
    if (withSound) {
        const menuSound = new Audio(menuHoverSound);
        // menuSound.volume

        return (
            <Styled
                styles = { styles }
                onClick = { onClick }
                onMouseEnter = { () => menuSound.play() }
                onMouseLeave = { () => false && menuSound.pause() }>
                { children }
            </Styled>
        );
    }

    return (
        <Styled
            styles = { styles }
            onClick = { onClick }>
            { children }
        </Styled>
    );
});

const Styled = styled.button`
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
