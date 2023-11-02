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

export const buttonStyle = styled.button`
  ${({ theme, pressed }) => css`
    box-shadow: ${pressed ? 'inset 2px 2px 10px 0 #000f' : '6px 6px 10px 0 #000f'};
    cursor: pointer;
    border-radius: 6px;
    background-color: ${pressed ? 'white' : 'buttonface'};
  `}
`;
