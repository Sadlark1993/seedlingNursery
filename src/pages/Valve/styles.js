import styled, { css } from 'styled-components';
import * as BtnStyle from '../../components/SubmitBtn/styles';

export const compStyle = styled.div`
  ${({ theme }) => css`
    & > button {
      margin: 2rem auto;
    }
  `}
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto 0 auto;
  justify-content: center;
  position: relative;
  width: fit-content;
`;

export const editBtn = styled.div`
  position: absolute;
  right: -6rem;
  display: inline-flex;
  width: min-content;
  //padding: 0.2rem;
  //border: solid 1px #333;
  margin-left: 3rem;
  cursor: pointer;
  box-shadow: 0.4rem 0.4rem 0.8rem #333;
  border-radius: 6px;
  width: 5rem;
  justify-content: center;
  align-content: center;
  transition: 200ms ease-in-out;
  //border: solid 2px #333;
  height: 4rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.4rem 0.4rem 1.4rem #333;
  }

  img {
    height: 4rem;
    width: 4rem;
  }
`;

export const valveObs = styled.blockquote`
  display: block;
  margin: 1rem auto 4rem auto;
  max-width: 94rem;
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

    .inputsWrapper {
      display: flex;
    }

    .singleInputWrapper {
      width: 50%;
      text-align: center;
      padding: 0 1rem;
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
    width: 94rem;
    height: 10rem;
  `}
`;

export const saveButton = styled.button`
  background: #333;
  width: 12rem;
  height: 3rem;
  color: white;
  border-radius: 4px;
  margin: 0.5rem 0 2rem 0;
  cursor: pointer;
  box-shadow: 0.4rem 0.4rem 0.8rem #333;
  transition: 100ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.4rem 0.4rem 1.4rem #333;
  }
`;
