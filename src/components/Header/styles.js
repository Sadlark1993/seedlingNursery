import styled, { css } from 'styled-components';

export const compStyle = styled.header`
  ${({ theme }) => css`
    display: flex;
    padding: 2rem;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    background: white;
  `}
`;
