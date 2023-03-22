import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  ${'' /* reset */}

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  a {
    color: black;
  }

  ${'' /* end of reset */}

  html {
    font-size: 62.5%;
  }

  body{
    font-size: ${theme.fonts.sizes.small};
    font-family: ${theme.fonts.family.primaryFont};
  }

`;
