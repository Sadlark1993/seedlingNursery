import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: block;
    overflow-x: inherit;
    width: 100%;
    max-width: 94rem;
    margin: 0 auto;

    @media ${theme.media.tablet} {
      padding: 0 2rem;
    }

    @media ${theme.media.mobile} {
      padding: 0 1.2rem;
    }
  `}
`;
