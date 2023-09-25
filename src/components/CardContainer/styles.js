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

    h3::after {
      display: block;
      background: black;
      content: ' ';
      height: 0.2rem;
      width: 3rem;
      margin: 0.5rem auto;
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
  box-shadow: 0.5rem 0.5rem 3rem #333;

  &:hover {
    transform: scale(1.05);
  }

  & > img {
    width: 22rem;
    height: 26rem;
    overflow: hidden;
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
