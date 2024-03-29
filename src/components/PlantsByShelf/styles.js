import styled, { css } from 'styled-components';
import * as CheckboxStyle from '../PlantStageCheckbox/styles';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7rem 12rem 12rem 1fr;
    row-gap: 1rem;

    & ${CheckboxStyle.compStyle} {
      margin-top: -4rem;
      margin-bottom: 4rem;
    }
  `}
`;

export const idNumber = styled.span`
  ${({ theme }) => css`
    grid-column: 1/2;
  `}
`;

export const stage = styled.span`
  ${({ theme }) => css`
    grid-column: 2/3;
  `}
`;

export const plantingDate = styled.span`
  ${({ theme }) => css`
    grid-column: 3/4;
  `}
`;

export const location = styled.span`
  ${({ theme }) => css``}
`;

export const idCell = styled.div`
  ${({ theme }) => css`
    border: solid 3px ${theme.colors.primaryColor};
    border-right: solid 1px ${theme.colors.primaryColor};
    width: 100%;
    height: 3rem;
    grid-column: 1/2;
    padding: 0.2rem 0.6rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `}
`;

export const row = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7rem 12rem 12rem 1fr;
    grid-column: 1/-1;
    background-color: white;
    cursor: pointer;
    transition: 100ms ease-in-out;
    box-shadow: 0.4rem 0.4rem 0.8rem #333;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0.4rem 0.4rem 1.8rem #333;
    }
  `}
`;

export const stageCell = styled.div`
  ${({ theme }) => css`
    border: solid 3px ${theme.colors.primaryColor};
    border-right: solid 1px ${theme.colors.primaryColor};
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 2/3;
    padding: 0.2rem 0.6rem;
  `}
`;

export const dateCell = styled.div`
  ${({ theme }) => css`
    border: solid 3px ${theme.colors.primaryColor};
    border-right: solid 1px ${theme.colors.primaryColor};
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 3/4;
    padding: 0.2rem 0.6rem;
  `}
`;

export const locationCell = styled.div`
  ${({ theme }) => css`
    border: solid 3px ${theme.colors.primaryColor};
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 4/5;
    padding: 0.2rem 0.6rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`;

export const wrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 4/5;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`;
