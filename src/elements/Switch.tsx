// Core
import React, { FC, memo } from 'react';
import styled from 'styled-components';

interface SwitchProps {
    checked: boolean
    onChange: Function
}

export const Switch: FC<SwitchProps> = memo(({ checked, onChange }) => {
    return (
        <div>
            <Label>
                <Checkbox
                    checked = { checked }
                    type = 'checkbox'
                    onChange = { () => onChange(!checked) }
                />
                <Circle
                    checked = { checked }
                />
            </Label>

        </div>
    );
});

const Label = styled.label`
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
`;

const Checkbox = styled.input`
    display:none;
`;
const Circle = styled.div`
    background-color: ${(props) => props.checked ? '#66bb6a' : '#CCC'};
    bottom: 0;
    border-radius: 34px;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;

    &::before {
        background-color: #fff;
        border-radius: 50%;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 26px;
        ${(props) => props.checked ? 'transform: translateX(26px);' : ''}
    }
`;
