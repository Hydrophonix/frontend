// Core
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks
import { useLogoutMutation } from '../../bus';

// Instruments
import { setAccessToken } from '../../tokenStore';

// Assets
import MenuHoverSound from '../../assets/sounds/menuHover.wav';
import * as S from './styles';

type Props = {};

type SoundButtonProps = {
    children?: React.ReactNode,
    onClick: Function,
}

// const menuSound = new Audio(MenuHoverSound);

const SoundButton: React.FC<SoundButtonProps> = ({ children, onClick }) => {
    const menuSound = new Audio(MenuHoverSound);
    // menuSound.volume

    return (
        <S.MenuButton
            onClick = { onClick }
            onMouseEnter = { () => menuSound.play() }
            onMouseLeave = { () => false && menuSound.pause() }>
            { children }
        </S.MenuButton>
    );
};

export const TopBar: React.FC<Props> = () => {
    const [ logout, { client }] = useLogoutMutation();
    const history = useHistory();

    useEffect(() => {
        console.log('TOPBAR RENDER');
    });


    return (
        <S.Container>
            <h1>TOPBAR HEADER
            </h1>
            <S.MenuContainer>
                <SoundButton onClick = { () => history.push('/home') } >Home</SoundButton>
                <SoundButton onClick = { () => history.push('/register') } >Register</SoundButton>
                <SoundButton onClick = { () => history.push('/login') } >Login</SoundButton>
                <SoundButton onClick = { () => history.push('/me') } >Me</SoundButton>
                <SoundButton onClick = { () => history.push('/game') } >GAME</SoundButton>
            </S.MenuContainer>
            <div>
                <button onClick = { async () => {
                    await logout();
                    await client?.clearStore();
                    setAccessToken('');
                } }>LOGOUT
                </button>
            </div>
            <h1>TOPBAR FOOTER</h1>
        </S.Container>
    );
};
