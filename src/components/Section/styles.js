import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, background }) => css`
    background: ${background ? theme.colors.bgPrimaryColor : 'white'};
    padding: 4rem 0;
    min-height: 60rem;
    display: flex;
    align-content: start;
    flex-wrap: wrap;
    width: 100%;
  `}
`;
