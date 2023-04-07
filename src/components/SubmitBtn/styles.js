import styled, { css } from 'styled-components';

export const compStyle = styled.button`
  ${({ theme }) => css`
    display: block;
    height: 4.8rem;
    width: 30rem;
    padding: 0.6rem;
    border: none;
    border-radius: 5px;
    font-size: ${theme.fonts.sizes.small};
    color: white;
    background: ${theme.colors.primaryColor};
    cursor: pointer;
  `}
`;
