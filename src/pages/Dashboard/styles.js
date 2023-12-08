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
    width: 50rem;
    padding: 1rem 0;
    background: white;
    border: ${theme.colors.primaryColor} solid 5px;
    //flex-flow: column;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    animation: modal 0.4s forwards;

    h2 {
      margin: 0 auto;
    }

    h2::after {
      content: ' ';
      display: block;
      margin: 0.5rem auto 2rem auto;
      height: 0.3rem;
      width: 6rem;
      background-color: ${theme.colors.primaryColor};
    }

    form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    & .inputWrapper {
      width: 49.8%;
      padding: 0.5rem 1rem;
      text-align: left;
    }

    input {
      height: 3.5rem;
    }

    input:focus {
      border-color: #333;
      outline-color: #333;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    & .shelfWrapper {
      width: 49.8%;
      padding: 0.5rem 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: left;
      align-items: center;
      margin-bottom: 1rem;

      input {
        margin: 0 1rem;
        border: none;
        border-bottom: solid 1px #333;
        padding: 0;
        border-radius: 0%;
        outline: none;
        height: 2.6rem;
      }
    }

    & .addSensorInput {
      margin-bottom: 0.8rem;
    }

    button {
      margin: 0 auto;
    }

    & .obsWrapper {
      text-align: left;
      padding: 0.5rem 1rem;
      text-align: left;
      width: 100%;
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

export const textAreaStyle = styled.textarea`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    border-color: ${theme.colors.primaryColor};
    padding: 1rem;
    font-size: ${theme.fonts.sizes.small};
    font-family: ${theme.fonts.family.primaryFont};
  `}
`;
