import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 12rem 12rem 12rem 1fr;
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
  `}

  ul {
    grid-column: 1/-1;

    li:nth-child(odd) {
      background-color: #d3d3d3;
    }
  }
`;

export const idLabel = styled.span`
  grid-column: 1/2;
  font-weight: bold;
`;

export const dateLabel = styled.span`
  grid-column: 2/3;
  font-weight: bold;
`;

export const timeLabel = styled.span`
  grid-column: 3/4;
  font-weight: bold;
`;

export const valueLabel = styled.div`
  grid-column: 4/5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: bold;
`;

export const row = styled.li`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 12rem 12rem 12rem 1fr;
  height: 3rem;
  width: 100%;
  //border: solid 1px #333;
  border-bottom: none;
  align-items: center;
`;

export const idCell = styled.div`
  grid-column: 1/2;
  padding-left: 0.5rem;
`;

export const dateCell = styled.div`
  grid-column: 2/3;
`;

export const timeCell = styled.div`
  grid-column: 3/4;
`;

export const valueCell = styled.div`
  grid-column: 4/5;
`;

export const next = styled.div`
  ${({ theme, active }) => css`
    color: ${active ? '#333' : '#b9b9b9b9'};
    cursor: pointer;
  `}
`;

export const prev = styled.div`
  ${({ theme, active }) => css`
    color: ${active ? '#333' : '#b9b9b9b9'};
    cursor: pointer;
  `}
`;

export const nav = styled.span`
  display: flex;
  gap: 1rem;
`;
