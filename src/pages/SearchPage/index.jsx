import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { PlantsBySpecie } from '../../components/PlantsBySpecie';
import { getPlantById } from '../../api/plantsApi';

const SearchPage = () => {
  const [plants, setPlants] = useState(null);

  const paramSelect = useRef();
  const searchValue = useRef();

  const handleSearch = async (event) => {
    event.preventDefault();
    //console.log(`Param: ${paramSelect.current.value}, search: ${searchValue.current.value}`);
    if (+paramSelect.current.value === 0) {
      //console.log('busca id');
      const obj = [await getPlantById(searchValue.current.value)];
      if (obj[0].id) {
        obj[0].currentLocation = obj[0].address ? obj[0].address : 'bancada ' + obj[0].shelf;
        setPlants(obj);
        return;
      }
      window.alert(obj[0].message);
      return;
    }

    if (+paramSelect.current.value === 1) {
      //console.log('busca por matriz');
    } else if (+paramSelect.current.value === 2) {
      //console.log('busca por endereco');
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
          {plants ? (
            <PlantsBySpecie
              datas={plants}
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              page={1}
            />
          ) : (
            <h2>Nenhum cadastro a ser exibido</h2>
          )}
        </Container>
      </Section>
    </Styled.pageStyle>
  );
};

export default SearchPage;
