import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css``}
`;

export const selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    width: 36rem;
    height: 6.4rem;
    border: solid 2px #333;
  }
`;
