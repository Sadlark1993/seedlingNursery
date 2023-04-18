import styled, { css } from 'styled-components';
import * as InputStyle from '../InputFText/styles';

export const compStyle = styled.div`
  ${({ theme, background }) => css`
    width: 100%;
    height: 30rem;
    background: ${background ? theme.colors.bgPrimaryColor : 'white'};
    overflow: auto;
    border: solid 0.3rem ${theme.colors.primaryColor};
    padding: 1.4rem;
  `}
`;

export const rowStyle = styled.div`
  ${({ theme, background }) => css`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 1.4rem;
    margin-bottom: 1.4rem;

    ${InputStyle.compStyle} {
      border: solid 3px ${theme.colors.primaryColor};
    }

    button {
      width: 7.5rem;
      min-width: 5rem;
      font-size: ${theme.fonts.sizes.xxlarge};
      font-weight: bold;
      color: ${theme.colors.primaryColor};
      border: solid 3px;
      border-radius: 5px;
    }
  `}
`;
