import styled, { css } from 'styled-components';

export const containerStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
    gap: 4rem 2rem;

    h3 {
      height: fit-content;
      margin: 0 auto;
    }

    span {
      margin: 0 auto;
    }
  `}
`;

export const cardStyle = styled.div`
  width: 22rem;
  height: 41.5rem;
  background: white;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const nameWrapper = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  height: 8rem;
  flex-wrap: wrap;
  padding: 0.3rem;
`;

export const scienWrapper = styled.div`
  display: flex;
  align-content: start;
  text-align: center;
  height: 7.5rem;
  flex-wrap: wrap;
  padding: 0.3rem;
`;
