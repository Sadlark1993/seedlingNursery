import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getPlantById } from '../../api/plantsApi';
import { PageTitle } from '../../components/PageTitle';
import { PlantImage } from '../../components/PlantImage';
import { FertRecordData } from '../../components/FertRecordData';

export const PlantData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({});
  const [stage, setStage] = useState('');

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
        break;
      case 1:
        setStage('muda');
        break;
      case 2:
        setStage('semente');
    }
  }, [plant]);

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
            <Styled.attKey>endereço/bancada: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>município - UF: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>altura: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>altura do fuste: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>CAP: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>formação do tronco: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>formação da copa: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>tipo de solo: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>tipo de vegetação: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>nome do determinador: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>inst determinador: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>densidade de ocorrência: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>latitude: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>longitude: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>altitude: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>área de coleta: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>data de plantio: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>data de doação: </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>matriz de origem </Styled.attKey>
            {plant.specie.name}
          </li>
          <li>
            <Styled.attKey>número de folhas</Styled.attKey>
            {plant.specie.name}
          </li>
        </Styled.table>
      </Styled.flexContainer>
      <p>
        <Styled.attKey>observações: </Styled.attKey>
      </p>
      <FertRecordData record={plant.fertRecord} />
    </Styled.compStyle>
  );
};

PlantData.propTypes = {};
