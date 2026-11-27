import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: white;
    background: ${theme.colors.primaryColor};
    border-radius: 20px;
    transition: 100ms ease-in-out;
    cursor: pointer;
    width: 100%;
    box-shadow: 2rem 1.3rem 2rem black;
    &:hover {
      transform: scale(1.05);
      box-shadow: 2.5rem 1.8rem 3.5rem 1rem black;
    }

    @media ${theme.media.mobile} {
      flex-wrap: wrap;
      box-shadow: 0.6rem 0.6rem 1.2rem black;
      &:hover {
        transform: none;
        box-shadow: 0.6rem 0.6rem 1.2rem black;
      }
    }
  `}
`;

export const idNumber = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    flex-grow: 0;
    border-right: solid 1px white;
    font-size: ${theme.fonts.sizes.xxlarge};
    font-weight: bold;

    @media ${theme.media.mobile} {
      width: 7rem;
      font-size: ${theme.fonts.sizes.large};
    }
  `}
`;

export const count = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 23.8rem;
    flex-grow: 0;
    border-right: solid 1px white;
    font-size: ${theme.fonts.sizes.medium};
    font-weight: bold;
    padding-left: 2rem;

    @media ${theme.media.mobile} {
      width: auto;
      flex-grow: 1;
      border-right: none;
      padding: 1.5rem;
    }
  `}
`;

export const speciesList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    font-size: ${theme.fonts.sizes.medium};
    font-weight: bold;
    padding-left: 2rem;
    overflow: hidden;

    @media ${theme.media.mobile} {
      flex-basis: 100%;
      border-top: solid 1px white;
      padding: 1rem 1.5rem;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
