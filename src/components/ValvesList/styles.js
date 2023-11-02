import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5rem 7.5rem 7.5rem 1fr;
    row-gap: 1rem;
    margin-top: 2rem;
  `}
`;

export const state = styled.div`
  grid-column: 1/2;
`;

export const idCell = styled.div`
  grid-column: 2/3;
`;

export const shelf = styled.div`
  grid-column: 3/4;
`;

export const observation = styled.div`
  grid-column: 4/5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
