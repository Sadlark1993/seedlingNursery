import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';
import { PlantStageCheckbox } from '../PlantStageCheckbox';

export const PlantsBySpecie = ({
  datas = [],
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
  stages = false,
  ...args
}) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate('/dados', {
      state: id
    });
  };

  return (
    <Container
      style={{
        minHeight: '50rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
      }}>
      <Styled.compStyle>
        {stages ? (
          <PlantStageCheckbox
            seedlings={seedlings}
            seeds={seeds}
            matrixes={matrixes}
            toggleSeedlings={toggleSeedlings}
            toggleSeeds={toggleSeeds}
            toggleMatrixes={toggleMatrixes}
          />
        ) : (
          ''
        )}

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
        {datas.length ? (
          datas.map((row) => {
            let stage;
            switch (+row.stage) {
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
              <Styled.row
                key={row.id}
                onClick={() => {
                  handleNavigate(row.id);
                }}>
                <Styled.idCell>{row.id}</Styled.idCell>
                <Styled.stageCell>{stage}</Styled.stageCell>
                <Styled.dateCell>{row.plantingDate ? row.plantingDate : '--'}</Styled.dateCell>
                <Styled.locationCell>{row.currentLocation}</Styled.locationCell>
              </Styled.row>
            );
          })
        ) : (
          <h2 style={{ gridColumn: '1/-1', margin: '1rem 0' }}>
            Nenhum cadastro corresponde à pesquisa
          </h2>
        )}
      </Styled.compStyle>
      <Styled.wrapper style={{ marginTop: '1rem' }}>
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
  seedlings: PropTypes.number,
  seeds: PropTypes.number,
  matrixes: PropTypes.number,
  toggleSeedlings: PropTypes.func,
  toggleSeeds: PropTypes.func,
  toggleMatrixes: PropTypes.func,
  stages: PropTypes.bool
};
