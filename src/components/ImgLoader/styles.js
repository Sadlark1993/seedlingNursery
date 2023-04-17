import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

export const imgDisp = styled.img`
  ${({ theme }) => css`
    max-width: 46rem;
    display: block;
    margin: 0 auto 1rem auto;
  `}
`;

export const imgInput = styled.input`
  ${({ theme }) => css``}
`;
