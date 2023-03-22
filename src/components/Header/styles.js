import styled, { css } from 'styled-components';

export const compStyle = styled.header`
  ${({ theme }) => css`
    display: flex;
    padding: 0 4rem;
    width: 100%;
    justify-content: space-between;
    background: white;
  `}
`;
