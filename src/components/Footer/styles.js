import styled, { css } from 'styled-components';

export const compStyle = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    color: white;
    height: 17rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;

    &.p {
      display: block;
      margin: 0 auto;
    }
  `}
`;
