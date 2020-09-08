// Core
import React, { FC, useState } from 'react';
import download from 'downloadjs';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button } from '../../elements';

// Assets
import { PageTitle, PageContentContainer, H2, H3, P } from '../styles';
import { ResumeContainer, ProjectContainer, Line } from './styles';
import { API_URL } from '../../constants';

const Resume: FC = () => {
    const [ loading, setLoading ] = useState(false);

    return (
        <ResumeContainer>
            <PageTitle>Resume</PageTitle>
            <PageContentContainer>
                <H2>
                    <Button
                        loading = { loading }
                        onClick = { async () => {
                            setLoading(true);
                            const res = await fetch(`${API_URL}/resume`, { credentials: 'include', method: 'GET' });
                            const blob = await res.blob();

                            download(blob, 'VMikoliuk.pdf', 'application/pdf');
                            setLoading(false);
                        } }>
                        Download PDF
                    </Button>
                </H2>
                <H2>
                    Hello, I'm Valentine Mikoliuk, JavaScript developer from Kyiv, Ukraine.
                </H2>
                <P>
                    Profession of software developer was my dream since I first meet a PC in a childhood.
                    I started to research and learn web development at 2017.
                    Technician background, motivation and learning abilities allowed me to join into industry very quickly.
                </P>
                <P>
                    Good analytical and abstact thinking allows me to understand bussiness requirements and provide optimazed and balanced solution.
                    During the development process, I pay attention not only to architecture/design but also to details. I believe that good software should be good at all levels of abstraction and I like to do it.
                </P>
                <P>
                    At current time I am mostly interested in software design/architecture, challenging tasks and algorithms.
                </P>
                <P>My core technologies: JavaScript, TypeScript, GraphQL, Node.js, React, Redux, Apollo, Express, TypeORM, NestJS, Prisma, Apollo, Webpack

                </P>
                <P>
                    The ideal tech stack in the project for me would be:
                    1. TypeScript, Node, GraphQL, React.
                    2. React, Node at product company.
                </P>
                <H3>My projects expirience</H3>
                <ProjectContainer>
                    <p>Description</p>
                    <p>SaaS application for adding hints and tutorials to webpages. Consists of four parts: backend, frontend, chrome extension and "Injector" (script that you should add to your page)</p>
                    <p>Job description</p>
                    <div>
                        <p>
                            1. Implemented tutorial module: constructor in frontend, rendering functionality in "Injector", backend functionality.
                        </p>
                        <p>
                            2. Worked with MutationObserver and implemented state management in "Injector".
                        </p>
                        <p>
                            3. Implemented Stripe.js subscriptions.
                        </p>
                        <p>
                            4. Implemented mailing functionality with mailgun-js.
                        </p>
                        <p>
                            5. Implemented password reset functionality.
                            And a lot of React components in frontend and graphql resolvers on backend, database migrations.
                        </p>

                    </div>
                    <p>Tech stack</p>
                    <p>JavaScript, Node.js, GraphQL, React, Redux, Apollo (server & client), Prisma, MySQL, Firebase, Styled components</p>
                    <p>Date</p>
                    <p>August 2018 - February 2019</p>
                </ProjectContainer>
                <Line />
                <ProjectContainer>
                    <p>Description</p>
                    <p>CRM application for food service. Consists of four parts: backend, frontend, 2 mobile apps - for clients and for staff</p>
                    <p>Job description</p>
                    <div>
                        <p>
                            Due to business-logic changes:
                        </p>
                        <p>
                            1. Refactored a few frontend pages.
                        </p>
                        <p>
                            2. Refactored resolvers on backend.
                        </p>
                        <p>
                            3. Refactored mobile apps, worked with QR codes.
                        </p>

                    </div>
                    <p>Tech stack</p>
                    <p>JavaScript, Node.js, GraphQL, React, Redux, Apollo (server & client), Prisma, MySQL, Firebase, Styled components, React Native</p>
                    <p>Date</p>
                    <p>February 2019 - May 2019</p>
                </ProjectContainer>
                <Line />
                <ProjectContainer>
                    <p>Description</p>
                    <p>CRM for IoT. Microservices</p>
                    <p>Job description</p>
                    <p>
                        Worked mostly with frontend part, a few tasks with backend.
                    </p>
                    <p>Tech stack</p>
                    <p>TypeScript, Node.js, React, Redux (Saga), NestJS, DynamoDB, Styled components</p>
                    <p>Date</p>
                    <p>May 2019 - July 2019</p>
                </ProjectContainer>
                <Line />
                <ProjectContainer>
                    <p>Description</p>
                    <p>CRM for field construction. Consists of 3 parts: frontend, backend and mobile app.</p>
                    <p>Job description</p>
                    <div>
                        <p>
                            1. Worked with client as a developer and partialy as a business analyst.
                        </p>
                        <p>
                            2. Planned sprints and estimated tasks.
                        </p>
                        <p>
                            3. Implemented and reworked screens in mobile app according to requirements of business logic.
                        </p>
                        <p>
                            4. Reworked frontend pages.
                        </p>
                        <p>
                            5. Implemented mailing functionality.
                        </p>
                        <p>
                            6. Implemented generating of PDF reports, weekly report mailing.
                        </p>
                    </div>
                    <p>Tech stack</p>
                    <p>JavaScript, React, Redux (Thunk), React Native, Firebase</p>
                    <p>Date</p>
                    <p>September 2019 - January 2020</p>
                </ProjectContainer>
                <Line />
                <ProjectContainer>
                    <p>Description</p>
                    <p>Own MVP of SaaS app. Consists of 2 parts: frontend and backend</p>
                    <p>Job description</p>
                    <div>
                        <p>
                            1. Business analysis.
                        </p>
                        <p>
                            2. System design.
                        </p>
                        <p>
                            3. Infrastructure.
                        </p>
                        <p>
                            4. Implemented backend.
                        </p>
                    </div>
                    <p>Tech stack</p>
                    <p>TypeScript, Webpack, React, Apollo (server & client), Styled components, GraphQL, Node.js, NestJS, TypeORM, PostgreSQL, Docker</p>
                    <p>Date</p>
                    <p>April 2019 - August 2020</p>
                </ProjectContainer>
            </PageContentContainer>
        </ResumeContainer>
    );
};


export default () => (
    <ErrorBoundary>
        <Resume />
    </ErrorBoundary>
);
