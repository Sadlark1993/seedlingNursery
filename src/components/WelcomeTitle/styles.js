import styled, { css } from 'styled-components';

export const compStyle = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.primaryFont};
    margin: 0;

    &::after {
      content: '';
      display: block;
      width: 6rem;
      height: 0.3rem;
      margin: 1rem auto 3rem auto;
      background-color: ${theme.colors.primaryColor};
    }
  `}
`;
