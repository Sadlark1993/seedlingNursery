import styled, { css } from 'styled-components';
import * as InputStyle from '../InputFText/styles';

export const compStyle = styled.div`
  ${({ theme, background }) => css`
    width: 100%;
    height: 30rem;
    background: ${background ? theme.colors.bgPrimaryColor : 'white'};
    overflow: auto;
    border: solid 0.1rem ${theme.colors.primaryColor};
    padding: 1.4rem;

    &::-webkit-scrollbar {
      width: 18px;
    }

    &::-webkit-scrollbar-track {
      background-color: #b9b9b9;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-radius: 5px;
    }
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
      cursor: pointer;
    }
  `}
`;

export const inputWrapper = styled.div`
  ${({ theme, background }) => css`
    position: relative;
    height: fit-content;
    &::after {
      content: 'kg';
      position: absolute;
      z-index: 2;
      bottom: 5px;
      right: 10px;
    }
  `}
`;
