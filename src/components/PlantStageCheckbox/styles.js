import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 33.4rem;
    justify-content: space-between;
    user-select: none;

    & label {
      cursor: pointer;
    }

    & input {
      cursor: pointer;
    }
  `}
`;

export const checkboxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    cursor: pointer;
  `};
`;
