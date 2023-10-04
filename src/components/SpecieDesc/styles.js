import styled, { css } from 'styled-components';
import * as BtnStyle from '../SubmitBtn/styles';

export const sectionStyle = styled.div`
  width: 100%;

  ${BtnStyle.compStyle} {
    margin: 6rem auto 2rem auto;
  }
`;

export const containerStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    width: 100%;

    img {
      flex-grow: 1;
      overflow: hidden;
      max-height: 45rem;
    }
  `}
`;

export const imageStyle = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 46rem;
    height: 42.5rem;
    overflow: hidden;
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
