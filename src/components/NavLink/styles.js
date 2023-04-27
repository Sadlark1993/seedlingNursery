import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.5rem 0.5rem;
    font-size: 1.8rem;
    margin: 0 0.5rem;
  `}
`;
