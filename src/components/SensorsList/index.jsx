import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Container } from '../Container';

const mockData = [
  {
    id: 1,
    idMicrocontroller: 1,
    idLocation: 2,
    type: 'umidade',
    mesure: 'graus',
    observations: 'esse sensor fica no começo da bancada. Ele deve estar sempre na sombra.'
  },
  {
    id: 2,
    idMicrocontroller: 1,
    idLocation: 2,
    type: 'umidade',
    mesure: 'graus',
    observations: 'esse sensor fica no começo da bancada. Ele deve estar sempre na sombra.'
  },
  {
    id: 3,
    idMicrocontroller: 1,
    idLocation: 2,
    type: 'distância',
    mesure: 'm',
    observations: 'esse sensor fica no começo da bancada. Ele deve estar sempre na sombra.'
  }
];

export const SensorsList = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0,
  ...args
}) => {
  datas = mockData;
  return (
    <Container
      style={{
        minHeight: '50rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
      }}>
      <Styled.compStyle>
        <Styled.id>ID</Styled.id>
        <Styled.micro>micro</Styled.micro>
        <Styled.type>tipo</Styled.type>
        <Styled.observation>
          <span>observação</span>
          {/*
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
            {...args}
          /> 
          */}
        </Styled.observation>
        {datas.length ? (
          datas.map((row) => (
            <Styled.row key={row.id}>
              <Styled.idCell>{row.id}</Styled.idCell>
              <Styled.microCell>{row.idMicrocontroller}</Styled.microCell>
              <Styled.typeCell>{row.type}</Styled.typeCell>
              <Styled.obsCell>{row.observations}</Styled.obsCell>
            </Styled.row>
          ))
        ) : (
          <h2 style={{ gridColumn: '1/-1', margin: '1rem 0' }}>
            Nenhum cadastro corresponde à pesquisa
          </h2>
        )}
      </Styled.compStyle>
    </Container>
  );
};

SensorsList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number
};
