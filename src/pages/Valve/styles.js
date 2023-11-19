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

export const modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh; /* 100% da tela */
    width: 100%;
    z-index: 50;
    display: none; /* <----------- */
    justify-content: center;
    align-items: center;

    &.active {
      display: flex;
    }
  `}
`;

export const modalRegister = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    background: white;
    border: ${theme.colors.primaryColor} solid 5px;
    flex-flow: column;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    animation: modal 0.4s forwards;

    h2::after {
      content: ' ';
      display: block;
      margin: 0.5rem auto 1rem auto;
      height: 0.3rem;
      width: 6rem;
      background-color: ${theme.colors.primaryColor};
    }

    input {
      height: 3rem;
      margin: 0 auto;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .inputWrapper {
      display: flex;
    }

    @keyframes modal {
      from {
        opacity: 0;
        transform: translate3d(0, -30px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `}
`;
