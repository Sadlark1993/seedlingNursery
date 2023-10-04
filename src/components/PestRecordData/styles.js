import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    h2 {
      text-align: center;
      font-weight: bold;
    }

    h2::after {
      display: block;
      content: ' ';
      margin: 0.3rem auto;
      width: 6rem;
      height: 0.3rem;
      background: ${theme.colors.primaryColor};
    }

    tr:nth-child(odd) {
      background-color: #d3d3d3;
    }
  `}
`;

export const table = styled.table`
  ${({ theme }) => css`
    width: 100%;

    th {
      text-align: start;
    }
  `}
`;
