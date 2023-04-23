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
    &:hover {
      transform: scale(1.05);
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
  `}
`;
