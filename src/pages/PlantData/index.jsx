import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getPlantById } from '../../api/plantsApi';

export const PlantData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({});

  useEffect(() => {
    if (state) {
      console.log(state);
      (async () => {
        const plantObj = await getPlantById(state);
        setPlant(await plantObj);
      })();
    } else {
      navigate('/collection');
    }
  }, []);

  useEffect(() => {
    console.log(plant);
  }, [plant]);

  return <Styled.compStyle></Styled.compStyle>;
};

PlantData.propTypes = {};
