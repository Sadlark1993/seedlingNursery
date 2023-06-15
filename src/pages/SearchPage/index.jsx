import React, { useState, useEffect, useRef, useContext } from 'react';
import * as Styled from './styles';

import { DataContext } from '../../contexts/Data';

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

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const SearchPage = () => {
  const { plants } = useContext(DataContext);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [plantsOnDisplay, setPlantsOnDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [enPrev, setEnPrev] = useState(true);
  const [enNext, setEnNext] = useState(true);

  const paramSelect = useRef();
  const searchValue = useRef();

  const rowsPerPage = 10;

  useEffect(() => {
    setSelectedPlants(plants);
  }, [plants]);

  useEffect(() => {
    setPlantsOnDisplay(
      selectedPlants.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
    );

    setEnPrev(currentPage > 0);
    setEnNext((currentPage + 1) * rowsPerPage < selectedPlants.length);
  }, [selectedPlants, currentPage]);

  //filters the list of plants by the selected parameter
  const handleSearch = (event) => {
    event.preventDefault();

    //filter by id
    if (paramSelect.current.value === '0') {
      setSelectedPlants(
        plants.filter((plant) => plant.id.toString().includes(searchValue.current.value))
      );
      //filter by matrix id
    } else if (paramSelect.current.value === '1') {
      setSelectedPlants(
        plants.filter((plant) => plant.matrix.toString().includes(searchValue.current.value))
      );
    } else if (paramSelect.current.value === '2') {
      setSelectedPlants(
        plants.filter((plant) =>
          plant.address.toLowerCase().includes(searchValue.current.value.toLowerCase())
        )
      );
    }
  };

  //page navigation events:
  const handleNext = () => {
    currentPage * rowsPerPage < selectedPlants.length / rowsPerPage
      ? setCurrentPage((c) => ++c)
      : '';
  };

  const handleLast = () => {
    currentPage * rowsPerPage < selectedPlants.length
      ? setCurrentPage(Math.ceil(selectedPlants.length / rowsPerPage - 1))
      : '';
  };

  const handleBack = () => {
    currentPage > 0 ? setCurrentPage((c) => --c) : '';
  };

  const handleFirst = () => {
    currentPage > 0 ? setCurrentPage(0) : '';
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
          {plantsOnDisplay.length ? (
            <PlantsBySpecie
              datas={plantsOnDisplay}
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              page={currentPage + 1}
              first={enPrev}
              previous={enPrev}
              next={enNext}
              last={enNext}
            />
          ) : (
            <h3 style={{ textAlign: 'center' }}>Nenhuma planta encontrada</h3>
          )}
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
