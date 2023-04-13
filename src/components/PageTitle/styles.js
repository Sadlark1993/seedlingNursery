import styled, { css } from 'styled-components';

export const compStyle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    font-weight: bold;
    text-align: center;

    &::after {
      content: '';
      display: block;
      width: 6rem;
      height: 0.3rem;
      margin: 1rem auto 2.5rem auto;
      background-color: ${theme.colors.primaryColor};
    }
  `}
`;
