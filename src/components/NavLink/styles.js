import styled, { css } from 'styled-components';

export const compStyle = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: 0.5rem;
    font-size: 1.8rem;
    margin: 0 0.5rem;
  `}
`;
