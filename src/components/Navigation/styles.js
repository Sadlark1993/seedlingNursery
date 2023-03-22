import styled, { css } from 'styled-components';

export const compStyle = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
  `}
`;
