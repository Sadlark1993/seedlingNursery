import styled, { css } from 'styled-components';

const after = (mesure) => css`
  &::after {
    content: ${mesure};
  }
`;

export const compStyle = styled.input`
  ${({ theme, fieldW, mesure }) => css`
    display: block;
    height: 6.4rem;
    width: ${fieldW}rem;
    padding: 0.6rem;
    font-size: ${theme.fonts.sizes.small};
    border: solid 1px black;
    border-radius: 5px;
  `}
`;
