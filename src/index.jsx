import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/Global-Styles';
import { theme } from './styles/theme';

import Home from './pages/Home';
import Collection from './pages/Collection';
import RegistrationForm from './pages/RegistrationForm';
import Shelves from './pages/Shelves';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Shelves />
  </ThemeProvider>
);
