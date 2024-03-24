import styled, { css } from 'styled-components';
import * as InputStyle from '../../components/InputFText/styles';
import * as BtnStyle from '../../components/SubmitBtn/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    /* Changing properties of InputFText when its inside Home  */
    & ${InputStyle.compStyle} {
      margin: 0 auto;
      margin-bottom: 2rem;
      height: 4.6rem;
    }

    & ${BtnStyle.compStyle} {
      display: block;
      margin: 0 auto;
    }

    span {
      display: block;
      text-align: center;
      margin-top: 2rem;
      font-size: ${theme.fonts.sizes.xsmall};
    }

    .select-wrapper {
      margin: 0 auto 2rem;
      display: block;
      width: 36rem;

      select {
        height: 3rem;
        width: 15rem;
        border: solid 1px black;
        border-radius: 5px;
      }
    }
  `}
`;
