import styled, { css } from 'styled-components';

export const compStyle = styled.button`
  ${({ theme }) => css`
    display: block;
    height: 6.4rem;
    width: 36rem;
    padding: 0.6rem;
    border: none;
    border-radius: 5px;
    font-size: ${theme.fonts.sizes.small};
    color: white;
    background: ${theme.colors.primaryColor};
    cursor: pointer;
    box-shadow: 0.4rem 0.4rem 0.8rem #333;
    transition: 100ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0.8rem 0.8rem 1.4rem #333;
    }
  `}
`;
