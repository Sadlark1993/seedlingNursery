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
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate('/dados', {
      state: id
    });
  };

  if (!datas.length) return <h2>vazio</h2>;

  return (
    <Container>
      <Styled.compStyle key={datas.length}>
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
            key={'plant: ' + row.id}
            onClick={() => {
              handleNavigate(row.id);
            }}>
            <Styled.idCell key="id">{row.id}</Styled.idCell>
            <Styled.stageCell key="specie">{row.idMatriz}</Styled.stageCell>
            <Styled.dateCell key="matrix">{row.plantingDate}</Styled.dateCell>
            <Styled.locationCell key="date">{row.specieName}</Styled.locationCell>
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
  datas: PropTypes.array.isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number
};
