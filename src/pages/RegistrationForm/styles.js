import styled, { css } from 'styled-components';

import * as BtnStyle from '../../components/SubmitBtn/styles';
import * as TextInputStyle from '../../components/InputFText/styles';
import * as FertStyle from '../../components/FertilizationRecord/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    ${BtnStyle.compStyle} {
      margin: 4rem auto;
    }

    ${TextInputStyle.compStyle} {
      height: 4.4rem;
    }

    ${FertStyle.compStyle} {
      button {
        height: 4.4rem;
        font-size: ${theme.fonts.sizes.large};
      }
    }
  `}
`;

export const gridFourColumns = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 22rem 22rem 22rem 22rem;
    column-gap: 2rem;
    row-gap: 2rem;
    margin-top: 4rem;
    grid-auto-flow: column; /* thats new to me. */
  `}
`;

export const selectInput = styled.select`
  ${({ theme, fieldW, visible }) => css`
    display: block;
    height: 4.4rem;
    width: ${fieldW}rem;
    padding: 0.6rem;
    font-size: ${theme.fonts.sizes.small};
    border: solid 1px black;
    border-radius: 5px;
  `}
`;

export const gridCell = styled.div`
  ${({ theme, cStart, cEnd, visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    grid-column: ${cStart} / ${cEnd};
    flex-wrap: wrap;
    align-items: flex-end;

    & > label {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    & > span {
      margin: 0 0 0.5rem 0.5rem;
    }
  `}
`;

export const gridCellUp = styled.div`
  ${({ theme, cStart, cEnd, visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    grid-column: ${cStart} / ${cEnd};
    flex-wrap: wrap;
    align-content: flex-start;

    & > label {
      width: 100%;
    }

    & > span {
      margin: 0 0 0.5rem 0.5rem;
    }
  `}
`;

export const textAreaStyle = styled.textarea`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    border-color: black;
    padding: 1rem;
    font-size: ${theme.fonts.sizes.small};
    font-family: ${theme.fonts.family.primaryFont};
  `}
`;

export const inputWrapper2 = styled.div`
  ${({ suffix }) => css`
    position: relative;
    height: fit-content;
    &::after {
      content: ${`"${suffix}"`}; //o man...
      position: absolute;
      z-index: 10;
      bottom: 5px;
      right: 10px;
    }
  `}
`;
