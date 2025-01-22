// index.style.ts

import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const TestContainer = styled.div`
    padding: 2rem;
    max-width: 1600px;
    margin: 0 auto;
`;

export const TestHeader = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`;

export const ComponentSection = styled.section`
    display: flex;
    flex-direction: row;
    grid-row: auto;
    gap: 2rem;
`;


export const TestCase = styled.div`
    display: grid;
    padding: 20px 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    gap: 2rem;
    border: 1px solid ${theme.colors.lightGray};
    justify-content: center;

    > div {
        width: 100%;
        max-width: 300px;
    }
`;

export const SubTitle = styled.h3`
    grid-column: 1 / -1;
    margin-bottom: 1rem;
`;
