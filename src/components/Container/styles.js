import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    max-width: 94rem;
    margin: 0 auto;
  `}
`;
