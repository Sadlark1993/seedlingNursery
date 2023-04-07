import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, background }) => css`
    background: ${background ? theme.colors.bgPrimaryColor : 'white'};
    padding: 6rem 0;
  `}
`;
