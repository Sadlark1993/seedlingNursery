import styled, { css } from 'styled-components';
import * as BtnStyle from '../SubmitBtn/styles';
import * as inputFieldStyle from '../InputFText/styles';

export const sectionStyle = styled.div`
  width: 100%;

  ${BtnStyle.compStyle} {
    margin: 6rem auto 2rem auto;
  }
`;

export const containerStyle = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    width: 100%;
  `}
`;

export const imageStyle = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 46rem;
    height: 42.5rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
  `}
`;

export const contentContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 46rem;
  `}
`;

export const nameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 2rem 0;
    & ${inputFieldStyle.compStyle} {
      font-size: ${theme.fonts.sizes.large};
      border-width: 0 0 2px;
      border-radius: 0;
    }

    & ${inputFieldStyle.compStyle}:focus {
      outline: none;
      border-bottom: 3px solid ${theme.colors.primaryColor};
    }
  `}
`;

export const sepRectangle = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.primaryColor};
    width: 46rem;
    height: 2rem;
    border-radius: 3px;
  `};
`;

export const name = styled.h3`
  ${({ theme }) => css`
    height: fit-content;
    font-size: ${theme.fonts.sizes.large};
    font-weight: bold;

    &::after {
      content: '';
      display: block;
      width: 6rem;
      height: 0.3rem;
      background: ${theme.colors.primaryColor};
      margin-top: 1rem;
    }
  `}
`;

export const scienNameWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 6rem;
    font-size: ${theme.fonts.sizes.medium};
    font-style: italic;
    margin-bottom: 2rem;

    & ${inputFieldStyle.compStyle} {
      border-width: 0 0 2px;
      border-radius: 0;
    }

    & ${inputFieldStyle.compStyle}:focus {
      outline: none;
      border-bottom: 3px solid ${theme.colors.primaryColor};
    }
  `};
`;

export const description = styled.p`
  margin: 2rem 0;
`;

export const hintText = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 4rem;
`;

export const fullSeparator = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.primaryColor};
    width: 96rem;
    height: 2rem;
    border-radius: 3px;
    margin: 0 auto;
  `};
`;

export const textAreaStyle = styled.textarea`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    border-color: black;
    padding: 1rem;
    font-size: ${theme.fonts.sizes.small};
    font-family: ${theme.fonts.family.primaryFont};
    margin: 2rem 0;
  `}
`;
