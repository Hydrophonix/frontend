// Core
import styled from 'styled-components';

export const TopBarContainer = styled.div`
    background-color: ${(props) => props.theme.main};
    height: 200px;
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
`;

export const ControlPanelContainer = styled.div`
    display: flex;
    width: 100px;
`;

export const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const MenuButton = styled.button`
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
`;