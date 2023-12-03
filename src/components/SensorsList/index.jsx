import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Container } from '../Container';
import { useNavigate } from 'react-router-dom';

export const SensorsList = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0,
  add = () => console.log('add valve'),
  ...args
}) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate('/sensor', {
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
        <Styled.id>ID</Styled.id>
        <Styled.micro>micro</Styled.micro>
        <Styled.type>tipo</Styled.type>
        <Styled.observation>
          <span>observação</span>
          <button onClick={add}>+ adicionar </button>
        </Styled.observation>
        {datas.length ? (
          datas.map((row) => (
            <Styled.row key={row.id} onClick={() => handleNavigate(row.id)}>
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
  page: PropTypes.number,
  add: PropTypes.func
};
