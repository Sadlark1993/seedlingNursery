import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;

    span {
      cursor: pointer;
    }
  `}
`;
