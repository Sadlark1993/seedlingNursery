import styled, { css } from 'styled-components';

export const compStyle = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 4rem;
    height: 5.1rem;
    overflow: hidden;
  `}
`;
