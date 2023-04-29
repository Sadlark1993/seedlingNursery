import PropTypes from 'prop-types';

import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';
import { PlantStageCheckbox } from '../PlantStageCheckbox';

export const PlantsBySpecie = ({
  datas,
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0,
  seedlings,
  seeds,
  matrixes,
  toggleSeedlings,
  toggleSeeds,
  toggleMatrixes,
  ...args
}) => {
  return (
    <Container>
      <Styled.compStyle>
        <PlantStageCheckbox
          seedlings={seedlings}
          seeds={seeds}
          matrixes={matrixes}
          toggleSeedlings={toggleSeedlings}
          toggleSeeds={toggleSeeds}
          toggleMatrixes={toggleMatrixes}
        />
        <Styled.idNumber>ID</Styled.idNumber>
        <Styled.stage>estágio</Styled.stage>
        <Styled.plantingDate>data de plantio</Styled.plantingDate>
        <Styled.wrapper>
          <Styled.location>localização atual</Styled.location>
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
            {...args}
          />
        </Styled.wrapper>
        {datas.map((row) => {
          let stage;
          switch (row.stage) {
            case 0:
              stage = 'matriz';
              break;
            case 1:
              stage = 'muda';
              break;
            case 2:
              stage = 'semente';
          }

          return (
            <Styled.row key={row.id}>
              <Styled.idCell>{row.id}</Styled.idCell>
              <Styled.stageCell>{stage}</Styled.stageCell>
              <Styled.dateCell>{row.plantingDate.length ? row.plantingDate : '--'}</Styled.dateCell>
              <Styled.locationCell>
                {row.address.length ? row.address : `bancada ${row.shelf}`}
              </Styled.locationCell>
            </Styled.row>
          );
        })}
        <Styled.wrapper>
          <Styled.location></Styled.location>
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
            {...args}
          />
        </Styled.wrapper>
      </Styled.compStyle>
    </Container>
  );
};

PlantsBySpecie.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number,
  seedlings: PropTypes.bool,
  seeds: PropTypes.bool,
  matrixes: PropTypes.bool,
  toggleSeedlings: PropTypes.func,
  toggleSeeds: PropTypes.func,
  toggleMatrixes: PropTypes.func
};
