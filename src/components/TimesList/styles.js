import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5rem 12.5rem 1fr;
    row-gap: 1rem;
    margin-top: 2rem;
  `}
`;

export const id = styled.div`
  grid-column: 1/2;
`;

export const initial = styled.div`
  grid-column: 2/3;
`;

export const final = styled.div`
  grid-column: 3/4;
`;

export const row = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5rem 12.5rem 1fr 5rem;
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

export const idCell = styled.div`
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

export const initialCell = styled.div`
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

export const finalCell = styled.div`
  ${({ theme }) => css`
    border: solid 2px black;
    border-left: none;
    width: 100%;
    height: 3rem;
    grid-column: 3/4;
    padding: 0.2rem 0.6rem;
    overflow: hidden;
  `}
`;

export const deleteCell = styled.div`
  display: block;
  border: solid 2px black;
  border-left: none;
  width: 100%;
  height: 3rem;
  grid-column: 4/5;
  padding: 0.2rem 0.6rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  img {
    height: 2.2rem;
    width: 100%;
  }
`;
