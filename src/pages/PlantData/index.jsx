import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getPlantById } from '../../api/plantsApi';
import { PageTitle } from '../../components/PageTitle';
import { PlantImage } from '../../components/PlantImage';
import { FertRecordData } from '../../components/FertRecordData';
import { PestRecordData } from '../../components/PestRecordData';
import { Container } from '../../components/Container';
import { SubmitBtn } from '../../components/SubmitBtn';

export const PlantData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({});
  const [stage, setStage] = useState('');

  //[b, c, d, e]: matrix, seedling, matrix and seedling, seedling and seeds
  const [inputGroup, setInputGroup] = useState([true, false, true, false]);

  useEffect(() => {
    if (state) {
      (async () => {
        const plantObj = await getPlantById(state);
        setPlant(await plantObj);
      })();
    } else {
      navigate('/collection');
    }
  }, []);

  useEffect(() => {
    switch (plant.stage) {
      case 0:
        setStage('matriz');
        setInputGroup([true, false, true, false]);
        break;
      case 1:
        setStage('muda');
        setInputGroup([false, true, true, true]);
        break;
      case 2:
        setStage('semente');
        setInputGroup([false, false, false, true]);
    }
  }, [plant]);

  const handleClick = () => {
    navigate('/cadastro', {
      state: plant.id
    });
  };

  if (!plant.id) return <h1>Loading...</h1>;

  return (
    <Styled.compStyle>
      <PageTitle>
        {'Dados da ' + stage.charAt(0).toUpperCase() + stage.slice(1) + ' de ID ' + plant.id}
      </PageTitle>
      <Styled.flexContainer>
        <PlantImage id={plant.id} alt={plant.specie.name} />
        <Styled.table>
          <li>
            <Styled.attKey>espécie: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>{plant.address.length ? 'endereço: ' : 'bancada: '}</Styled.attKey>
            {plant.address.length ? plant.address : plant.shelf}
          </li>

          {/* Matriz */}
          {inputGroup[0] && (
            <>
              <li>
                <Styled.attKey>município - UF: </Styled.attKey>
                {plant.city}
              </li>
              <li>
                <Styled.attKey>altura: </Styled.attKey>
                {plant.height}
              </li>
              <li>
                <Styled.attKey>altura do fuste: </Styled.attKey>
                {plant.shaftHeight}
              </li>
              <li>
                <Styled.attKey>CAP: </Styled.attKey>
                {plant.cap}
              </li>
              <li>
                <Styled.attKey>formação do tronco: </Styled.attKey>
                {plant.trunkFormation}
              </li>
              <li>
                <Styled.attKey>formação da copa: </Styled.attKey>
                {plant.cupFormation}
              </li>
              <li>
                <Styled.attKey>tipo de solo: </Styled.attKey>
                {plant.soilType}
              </li>
              <li>
                <Styled.attKey>tipo de vegetação: </Styled.attKey>
                {plant.vegetationType}
              </li>
              <li>
                <Styled.attKey>nome do determinador: </Styled.attKey>
                {plant.determiningName}
              </li>
              <li>
                <Styled.attKey>inst determinador: </Styled.attKey>
                {plant.detInst}
              </li>
              <li>
                <Styled.attKey>densidade de ocorrência: </Styled.attKey>
                {plant.occurrenceDensity}
              </li>
              <li>
                <Styled.attKey>latitude: </Styled.attKey>
                {plant.latitude}
              </li>
              <li>
                <Styled.attKey>longitude: </Styled.attKey>
                {plant.longitude}
              </li>
              <li>
                <Styled.attKey>altitude: </Styled.attKey>
                {plant.altitude}
              </li>
              <li>
                <Styled.attKey>área de coleta: </Styled.attKey>
                {plant.pickupAddress}
              </li>
            </>
          )}

          {/* Seedling  */}
          {inputGroup[1] && (
            <>
              <li>
                <Styled.attKey>altura: </Styled.attKey>
                {plant.height}
              </li>
              <li>
                <Styled.attKey>data de plantio: </Styled.attKey>
                {plant.plantingDate}
              </li>
              <li>
                <Styled.attKey>data de doação: </Styled.attKey>
                {plant.donationDate}
              </li>
              <li>
                <Styled.attKey>número de folhas: </Styled.attKey>
                {plant.leafs}
              </li>
            </>
          )}

          {inputGroup[3] && (
            <li>
              <Styled.attKey>matriz de origem: </Styled.attKey>
              {plant.originMatrix}
            </li>
          )}
        </Styled.table>
      </Styled.flexContainer>
      <Container className="data-container">
        <p>
          <Styled.attKey>observações: </Styled.attKey>
          {plant.observations}
        </p>
        {inputGroup[3] && (
          <>
            <FertRecordData record={plant.fertRecord} />
            <PestRecordData record={plant.pestRecord} />
          </>
        )}

        <SubmitBtn className="btn" onClick={handleClick}>
          Atualizar Dados
        </SubmitBtn>
      </Container>
    </Styled.compStyle>
  );
};

PlantData.propTypes = {};
