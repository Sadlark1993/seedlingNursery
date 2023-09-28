import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
  `}
`;

export const flexContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 20px;
    width: 94rem;
    margin: 0 auto 4rem auto;
  `}
`;

export const table = styled.div`
  ${({ theme }) => css``}
`;
