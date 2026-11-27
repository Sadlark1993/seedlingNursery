import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    padding: 4rem 0;

    img {
      max-height: 40rem;
      flex-grow: 1;
    }

    .data-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .btn {
      margin: 2rem auto;
    }

    li:nth-child(odd) {
      background: #d3d3d3;
    }
  `}
`;

export const flexContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: 94rem;
    margin: 0 auto 4rem auto;

    @media ${theme.media.tablet} {
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;

      img {
        flex-grow: 0;
      }

      ul {
        width: 100%;
      }
    }

    @media ${theme.media.mobile} {
      padding: 0 1.2rem;
    }
  `}
`;

export const table = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.sizes.small};
    flex-grow: 1;
  `}
`;

export const attKey = styled.span`
  font-weight: bold;
`;

/* export const line = styled.li`
  ${({ active }) => css`
    display: ${active ? 'block' : 'none'};
  `}
`; */
