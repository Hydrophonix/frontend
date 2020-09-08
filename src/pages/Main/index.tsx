// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Link } from '../../elements';

// Assets
import { PageTitle, PageContentContainer, H2, H3, P } from '../styles';
import { MainContainer } from './styles';

const Home: FC = () => {
    return (
        <MainContainer>
            <PageTitle>About project</PageTitle>
            <PageContentContainer>
                <H2>Welcome to <Link to = 'Resume'>my</Link> web app! This is project for testing new techs and showcase.</H2>
                <H2>Project tech description:</H2>
                <H3>Frontend - PWA</H3>
                <P>UI/UX Design: No design :) (P.S. dark theme looks better)</P>
                <P>Styling: Styled-components, CSS flex and grids.</P>
                <P>UI: React 16.13</P>
                <P>Data store: React context, state for local data and Apollo Client for server data</P>
                <P>Types: TypeScript and types generation for server data with Apollo CLI, Engine</P>
                <P>Dev tools: Custom Webpack, ESLint configurations</P>
                <H3>Backend</H3>
                <P>API type: GraphQL</P>
                <P>Framework: NestJS (Express, Apollo)</P>
                <P>ORM system: TypeORM</P>
                <P>Auth: Double JWT (Access and refresh tokens)</P>
                <P>Types: TypeScript</P>
                <P>Database: PostgreSQL</P>
                <H3>Infra</H3>
                <P>Digital Ocean, Docker, Dokku</P>
            </PageContentContainer>
        </MainContainer>
    );
};


export default () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);
