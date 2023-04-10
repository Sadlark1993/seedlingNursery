import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: block;
    overflow-x: inherit;
    width: 94rem;
    margin: 0 auto;
  `}
`;
