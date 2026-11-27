import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

export const imgDisp = styled.img`
  ${({ theme }) => css`
    max-width: min(46rem, 100%);
    display: block;
    margin: 0 auto 1rem auto;
  `}
`;

export const imgInput = styled.input`
  ${({ theme }) => css``}
`;
