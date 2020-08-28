// Core
import React, { FC } from 'react';
// import styled from 'styled-components';

interface PageTitleProps {
    title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <>
            todo {title}
        </>
    );
};

// const Container = styled.div`
//     height: 100px;

// `;
