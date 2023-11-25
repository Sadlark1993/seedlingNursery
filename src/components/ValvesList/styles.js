import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5rem 7.5rem 7.5rem 1fr;
    row-gap: 1rem;
    margin-top: 2rem;
  `}
`;

export const state = styled.div`
  grid-column: 1/2;
`;

export const idNumber = styled.div`
  grid-column: 2/3;
`;

export const shelf = styled.div`
  grid-column: 3/4;
`;

export const observation = styled.div`
  grid-column: 4/5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  & > button {
    padding: 0.5rem 0.8rem;
    position: absolute;
    right: 0.3rem;
    transition: 0.15s ease-in-out;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0.2rem 0.2rem 0.4rem #333;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0.4rem 0.4rem 1rem #333;
    }
  }
`;

export const row = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5rem 7.5rem 7.5rem 1fr 5rem;
    grid-column: 1/-1;
    background-color: white;
    transition: 0.15s ease-in-out;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0.4rem 0.4rem 0.8rem #333;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0.4rem 0.4rem 1.8rem #333;
    }
  `}
`;

export const stateCell = styled.div`
  ${({ theme }) => css`
    border: solid 2px black;
    border-right: solid 1px black;
    width: 100%;
    height: 3rem;
    grid-column: 1/2;
    padding: 0.2rem 0.6rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  `}
`;

export const idCell = styled.div`
  ${({ theme }) => css`
    border: solid 2px black;
    border-right: solid 1px black;
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 2/3;
    padding: 0.2rem 0.6rem;
  `}
`;

export const shelfCell = styled.div`
  ${({ theme }) => css`
    border: solid 2px black;
    border-right: solid 1px black;
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 3/4;
    padding: 0.2rem 0.6rem;
  `}
`;

export const obsCell = styled.div`
  ${({ theme }) => css`
    border: solid 2px black;
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 4/5;
    padding: 0.2rem 0.6rem;
    overflow: hidden;
  `}
`;

export const deleteCell = styled.div`
  border: solid 2px black;
  border-left: none;
  width: 100%;
  height: 3rem;
  grid-column: 5/6;
  padding: 0.2rem 0.6rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  & > img {
    height: 2.2rem;
    width: 100%;
  }
`;

export const circle = styled.div`
  ${({ theme, color }) => css`
    border: solid 2px black;
    width: 2rem;
    height: 2rem;
    background: ${color};
    border-radius: 50%;
    margin: 0.15rem auto;
  `}
`;

export const navWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
`;
