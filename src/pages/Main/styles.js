import styled from 'styled-components';

export default {
    MainContainer: styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    Button: styled.button`
        ${({ theme }) => ({ ...theme.buttonStyles })}
        width: 120px;
        height: 40px;
        font-size: 20px;
        margin-right: 5px;
        border: 2px solid black;
        border-radius: 12px;
        box-shadow:    3px 2px 1px rgba(0, 0, 0, 1);

        &:active {
            position: relative;
            top: 2px;
            left: 3px;
            box-shadow: 3px 2px 1px rgba(0,0,0,0);
        }
    `,

    ButtonContainer: styled.div`
        display: flex;
    `,
};
