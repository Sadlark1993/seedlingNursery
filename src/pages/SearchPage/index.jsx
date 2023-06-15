import React, { useState, useEffect, useRef, useContext } from 'react';
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
import { PlantsBySpecie } from '../../components/PlantsBySpecie';
import { Footer } from '../../components/Footer';
import { DataContext } from '../../contexts/Data';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const SearchPage = () => {
  const { plants } = useContext(DataContext);
  const [plantsOnDisplay, setPlantsOnDisplay] = useState(plants ? plants : []);

  const paramSelect = useRef();
  const searchValue = useRef();

  useEffect(() => {
    setPlantsOnDisplay(plants);
  }, [plants]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Param: ${paramSelect.current.value}, search: ${searchValue.current.value}`);
    if (+paramSelect.current.value === 0) {
      console.log('busca id');
      setPlantsOnDisplay(
        plants.length > 0 ? plants.filter((plant) => +plant.id === +searchValue.current.value) : []
      );
    } else if (+paramSelect.current.value === 1) {
      console.log('busca por matriz');
      const selectedPlants = plants.filter((plant) => {
        return +plant.observacoes.split(';')[8] === +searchValue.current.value;
      });
      setPlantsOnDisplay(selectedPlants);
    } else if (+paramSelect.current.value === 2) {
      console.log('busca por endereco');
      setPlantsOnDisplay(
        plants.filter((plant) =>
          plant.observacoes
            .split(';')[7]
            .toUpperCase()
            .includes(searchValue.current.value.toUpperCase())
        )
      );
    }
  };

  const handleLast = () => {
    console.log('last');
  };

  const handleBack = () => {
    console.log('back');
  };

  const handleNext = () => {
    console.log('next');
  };

  const handleFirst = () => {
    console.log('first');
  };

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
              <option value={2}>endereço</option>
            </Styled.selectInput>
            <Styled.searchWrapper>
              <InputFText fieldW={2} forwardedRef={searchValue} />
            </Styled.searchWrapper>
            <SubmitBtn onClick={handleSearch}>buscar</SubmitBtn>
          </Styled.SearchForm>
          <PlantsBySpecie
            datas={plantsOnDisplay}
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={1}
          />
        </Container>
      </Section>

      <Footer>
        {
          'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
        }
      </Footer>
    </Styled.pageStyle>
  );
};

export default SearchPage;
