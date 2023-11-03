import styled, { css } from 'styled-components';
import * as BtnStyle from '../../components/SubmitBtn/styles';

export const compStyle = styled.div`
  ${({ theme }) => css`
    & ${BtnStyle.compStyle} {
      margin: 2rem auto;
    }
  `}
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const circle = styled.div`
  ${({ theme, color }) => css`
    display: block;
    width: 5rem;
    height: 5rem;
    border: solid 2px ${theme.colors.primaryColor};
    background: ${color};
    border-radius: 50%;
    margin: 0 2rem;
  `}
`;
