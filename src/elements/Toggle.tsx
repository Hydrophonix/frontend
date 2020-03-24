// Core
import React, { FC, memo } from 'react';
import styled from 'styled-components';

interface ToggleProps {
    active: boolean;
    onChange: Function;
}

export const Toggle: FC<ToggleProps> = memo(({ active, onChange }) => {
    return (
        <ToggleContainer onClick = { () => onChange(!active) }>
            <ToggleBar>
                < ToggleButton active = { active }/>
            </ToggleBar>
        </ToggleContainer>
    );
});

// Styles
const ToggleContainer = styled.div`
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ToggleBar = styled.div`
    width: 30px;
    height: 14px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondary}; 
`;

const ToggleButton = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 10px;
    top: 0;
    left: 0;
    z-index: 2147000000;
    ${({ active }) => active ? '' : 'transform: translateX(20px);'};
    transition: .2s;
`;

