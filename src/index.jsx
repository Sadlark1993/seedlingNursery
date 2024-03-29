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
import { Footer } from './components/Footer';
import { DashBoard } from './pages/Dashboard';
import { Valve } from './pages/Valve';
import { Sensor } from './pages/Sensor';
import RegisterUser from './pages/RegisterUser';
import { Logout } from './pages/Logout';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// 'Cadastrar Usuario' so deve aparecer para administradores
let links = LinksMock;
if (localStorage.getItem('authority') == 'ADMIN') {
  links = [{ name: 'Cadastrar Usuário', href: '/cadastrar-usuario' }];
  LinksMock.forEach((value) => {
    links.push(value);
  });
}

root.render(
  <ThemeProvider theme={theme}>
    <Data>
      <BrowserRouter>
        <GlobalStyles />
        <Header>
          {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={links} />]}
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acervo" element={<Collection />} />
          <Route path="/bancadas" element={<Shelves />} />
          <Route path="/pesquisa" element={<SearchPage />} />
          <Route path="/cadastro" element={<RegistrationForm />} />
          <Route path="/login" element={<Home />} />
          <Route path="/dados" element={<PlantData />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/valve" element={<Valve />} />
          <Route path="/sensor" element={<Sensor />} />
          <Route path="/cadastrar-usuario" element={<RegisterUser />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer>
          {
            'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
          }
        </Footer>
      </BrowserRouter>
    </Data>
  </ThemeProvider>
);
