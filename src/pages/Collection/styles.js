import styled, { css } from 'styled-components';
import * as ContainerStyle from '../../components/Container/styles';
import * as SpecieStyle from '../../components/SpecieDesc/styles';

export const pageStyle = styled.div`
  ${({ theme }) => css`
    & ${ContainerStyle.compStyle}>:nth-child(2) {
      margin-bottom: 1.6rem;
    }

    & ${ContainerStyle.compStyle}>:nth-child(4) {
      margin-top: 1.6rem;
    }

    & ${SpecieStyle.sectionStyle} {
      margin-bottom: -6rem;
    }

    & .start {
      align-content: start;
    }
  `}
`;
