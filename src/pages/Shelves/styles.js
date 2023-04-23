import styled, { css } from 'styled-components';

import * as TitleStyle from '../../components/PageTitle/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    & ${TitleStyle.compStyle} {
      margin-bottom: 4rem;
    }
  `}
`;
