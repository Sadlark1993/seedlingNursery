import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/Global-Styles';
import { theme } from './styles/theme';
import { Data } from './contexts/Data';

import Home from './pages/Home';
import Collection from './pages/Collection';
import RegistrationForm from './pages/RegistrationForm';
import Shelves from './pages/Shelves';
import SearchPage from './pages/SearchPage';
import { PlantData } from './pages/PlantData';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import LinksMock from './components/Header/LinksMock';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Data>
      <BrowserRouter>
        <GlobalStyles />
        <Header>
          {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={LinksMock} />]}
        </Header>
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/acervo" element={<Collection />} />
          <Route path="/bancadas" element={<Shelves />} />
          <Route path="/pesquisa" element={<SearchPage />} />
          <Route path="/cadastro" element={<RegistrationForm />} />
          <Route path="/login" element={<Home />} />
          <Route path="/dados" element={<PlantData />} />
        </Routes>
      </BrowserRouter>
    </Data>
  </ThemeProvider>
);
