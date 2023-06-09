import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${theme.spacings.medium};
  `}
`;
