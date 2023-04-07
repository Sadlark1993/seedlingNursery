import styled, { css } from 'styled-components';
import * as InputStyle from '../../components/InputFText/styles';
import * as BtnStyle from '../../components/SubmitBtn/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    /* Changing properties of InputFText when its inside Home  */
    & ${InputStyle.compStyle} {
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    & ${BtnStyle.compStyle} {
      display: block;
      margin: 0 auto;
    }

    span {
      display: block;
      text-align: center;
      margin-top: 2rem;
    }
  `}
`;
