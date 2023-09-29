import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};

    img {
      max-height: 40rem;
    }
  `}
`;

export const flexContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 20px;
    width: 94rem;
    margin: 0 auto 4rem auto;
  `}
`;

export const table = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.sizes.small};
  `}
`;

export const attKey = styled.span`
  font-weight: bold;
`;
