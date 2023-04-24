import styled, { css } from 'styled-components';

import * as TextInputStyle from '../../components/InputFText/styles';
import * as BtnStyle from '../../components/SubmitBtn/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    ${TextInputStyle.compStyle} {
      height: 4.4rem;
      width: 100%;
    }

    ${BtnStyle.compStyle} {
      height: 4.4rem;
      width: 16rem;
      flex-grow: 0;
    }
  `}
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 2rem;
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

export const searchWrapper = styled.div`
  ${() => css`
    position: relative;
    height: fit-content;
    flex-grow: 2;
    &::after {
      display: block;
      content: ''; //o man...
      height: 30px;
      width: 30px;
      background: url('./img/icons/search.svg');
      background-repeat: no-repeat;
      background-size: 30px 30px;
      position: absolute;
      z-index: 10;
      bottom: 5px;
      right: 10px;
    }
  `}
`;
