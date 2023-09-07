import PropTypes from 'prop-types';
import { useContext } from 'react';

import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';
import { DataContext } from '../../contexts/Data';
import { useNavigate } from 'react-router-dom';

export const PlantsByShelf = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0
}) => {
  const { plants } = useContext(DataContext);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate('/cadastro', {
      state: id
    });
  };

  //Writes the plants species
  datas.length &&
    datas.forEach((plant) => {
      const selectedPlant = plants.find(
        (matrix) => +matrix.id === +plant.observacoes.split(';')[8]
      );
      plant.nomeComum = selectedPlant ? selectedPlant.nomeComum : 'matriz nao cadastrada';
    });

  return (
    <Container>
      <Styled.compStyle>
        <Styled.idNumber>ID</Styled.idNumber>
        <Styled.stage>matriz</Styled.stage>
        <Styled.plantingDate>data de plantio</Styled.plantingDate>
        <Styled.wrapper>
          <Styled.location>espécie</Styled.location>
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
          />
        </Styled.wrapper>
        {datas.map((row) => (
          <Styled.row
            key={row.id}
            onClick={() => {
              handleNavigate(row.id);
            }}>
            <Styled.idCell>{row.id}</Styled.idCell>
            <Styled.stageCell>{row.observacoes.split(';')[8]}</Styled.stageCell>
            <Styled.dateCell>{row.observacoes.split(';')[3].replaceAll('-', '/')}</Styled.dateCell>
            <Styled.locationCell>{row.nomeComum}</Styled.locationCell>
          </Styled.row>
        ))}
        <Styled.wrapper>
          <Styled.location></Styled.location>
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
          />
        </Styled.wrapper>
      </Styled.compStyle>
    </Container>
  );
};

PlantsByShelf.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number
};
