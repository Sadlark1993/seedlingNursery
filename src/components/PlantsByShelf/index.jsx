import PropTypes from 'prop-types';
import { useContext } from 'react';

import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';
import { DataContext } from '../../contexts/Data';

export const PlantsByShelf = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0
}) => {
  const { plants } = useContext(DataContext);

  //Writes the plants species
  datas.length &&
    datas.forEach((plant) => {
      plant.specie = plants.find((matrix) => matrix.id === plant.matrix).specie;
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
          <Styled.row key={row.id}>
            <Styled.idCell>{row.id}</Styled.idCell>
            <Styled.stageCell>{row.matrix}</Styled.stageCell>
            <Styled.dateCell>{row.plantingDate.replaceAll('-', '/')}</Styled.dateCell>
            <Styled.locationCell>{row.specie}</Styled.locationCell>
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
