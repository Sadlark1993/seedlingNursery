import styled, { css } from 'styled-components';

export const compStyle = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const menuButton = styled.button`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 4.4rem;
    height: 4.4rem;
    padding: 1rem 0.8rem;
    background: none;
    border: none;
    cursor: pointer;

    span {
      display: block;
      height: 0.3rem;
      width: 100%;
      background: ${theme.colors.primaryColor};
      border-radius: 2px;
    }

    @media ${theme.media.tablet} {
      display: flex;
    }
  `}
`;

export const linksList = styled.div`
  ${({ theme, $open }) => css`
    display: flex;
    justify-content: space-around;

    @media ${theme.media.tablet} {
      display: ${$open ? 'flex' : 'none'};
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 40;
      background: white;
      box-shadow: 0 0.8rem 1.2rem rgba(0, 0, 0, 0.25);
      padding: 0.5rem 2rem 1.5rem;
    }
  `}
`;
