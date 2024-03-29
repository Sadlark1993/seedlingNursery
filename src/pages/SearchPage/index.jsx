import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { PlantsBySpecie } from '../../components/PlantsBySpecie';
import { getPlantById, getPlantsByAddress, getPlantsByMatrix } from '../../api/plantsApi';

const SearchPage = () => {
  const [plants, setPlants] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  const paramSelect = useRef();
  const searchValue = useRef();

  const pageSize = 20;

  useEffect(() => {
    if (page <= 1) setFirst(false);
    else setFirst(true);

    if (page * pageSize >= count) setLast(false);
    else setLast(true);
    console.log(count);
  }, [count, page, plants]);

  useEffect(() => {
    plants && handleSearch();
  }, [page]);

  const handleSearch = async (event) => {
    setPage(1);
    event && event.preventDefault();
    //console.log(`Param: ${paramSelect.current.value}, search: ${searchValue.current.value}`);
    if (+paramSelect.current.value === 0) {
      //console.log('busca id');
      const obj = [await getPlantById(searchValue.current.value)];
      if (obj[0].id) {
        obj[0].currentLocation = obj[0].address ? obj[0].address : 'bancada ' + obj[0].shelf;
        setPlants(obj);
        setCount(1);
        return;
      }
      window.alert(obj[0].message);
      return;
    }

    if (+paramSelect.current.value === 1) {
      //console.log('busca por matriz');
      const obj = await getPlantsByMatrix(searchValue.current.value, page, pageSize);
      setPlants(obj.list);
      setCount(obj.number);
      console.log('m: ' + obj.number);
      return;
    }

    if (+paramSelect.current.value === 2) {
      //console.log('busca por endereco');
      const obj = await getPlantsByAddress(searchValue.current.value, page, pageSize);
      setPlants(obj.list);
      setCount(obj.number);
    }
  };

  const handleLast = () => {
    setPage(Math.ceil(count / pageSize));
  };

  const handleBack = () => {
    setPage((c) => --c);
  };

  const handleNext = () => {
    setPage((c) => ++c);
  };

  const handleFirst = () => {
    setPage(1);
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
              page={page}
              first={first}
              previous={first}
              next={last}
              last={last}
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
