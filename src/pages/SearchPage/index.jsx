import React, { useRef } from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import LinksMock from '../../components/Header/LinksMock';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const SearchPage = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Param: ${paramSelect.current.value}, search: ${searchValue.current.value}`);
  };

  const paramSelect = useRef();
  const searchValue = useRef();

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={LinksMock} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>Buscar Plantas</PageTitle>
          <Styled.SearchForm>
            <Styled.selectInput ref={paramSelect} fieldW={16}>
              <option value={0}>id</option>
              <option value={1}>matriz de origem</option>
              <option value={2}>localização</option>
            </Styled.selectInput>
            <Styled.searchWrapper>
              <InputFText fieldW={2} forwardedRef={searchValue} />
            </Styled.searchWrapper>
            <SubmitBtn onClick={handleSearch}>buscar</SubmitBtn>
          </Styled.SearchForm>
        </Container>
      </Section>
    </Styled.pageStyle>
  );
};

export default SearchPage;
