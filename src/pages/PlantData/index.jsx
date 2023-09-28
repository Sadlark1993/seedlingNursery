import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getPlantById } from '../../api/plantsApi';
import { PageTitle } from '../../components/PageTitle';
import { PlantImage } from '../../components/PlantImage';

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
      <PageTitle>{'Dados da ' + stage.charAt(0).toUpperCase() + stage.slice(1)}</PageTitle>
      <Styled.flexContainer>
        <PlantImage id={plant.id} alt={plant.specie.name} />
      </Styled.flexContainer>
    </Styled.compStyle>
  );
};

PlantData.propTypes = {};
