import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { Container } from '../Container';

export const ValvesList = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0,
  add = () => console.log('add valve'),
  deleteV = (id) => console.log('deleted: ' + id),
  ...args
}) => {
  //datas = mockData;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate('/valve', {
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
        <Styled.state> </Styled.state>
        <Styled.idNumber>ID</Styled.idNumber>
        <Styled.shelf>bancada</Styled.shelf>
        <Styled.observation>
          <span>observação</span>
          <button onClick={add}>+ adicionar </button>
          {/*           
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
            {...args}
          /> */}
        </Styled.observation>
        {datas.length ? (
          datas.map((row) => (
            <Styled.row key={row.id}>
              <Styled.stateCell onClick={() => handleNavigate(row.id)}>
                <Styled.circle color={row.currentState ? 'green' : 'red'} />
              </Styled.stateCell>
              <Styled.idCell onClick={() => handleNavigate(row.id)}>{row.id}</Styled.idCell>
              <Styled.shelfCell onClick={() => handleNavigate(row.id)}>
                {row.shelf}
              </Styled.shelfCell>
              <Styled.obsCell onClick={() => handleNavigate(row.id)}>
                {row.observations}
              </Styled.obsCell>
              <Styled.deleteCell onClick={() => deleteV(row.id)}>
                <img src="./img/icons/garbage.svg" />
              </Styled.deleteCell>
            </Styled.row>
          ))
        ) : (
          <h2 style={{ gridColumn: '1/-1', margin: '1rem 0' }}>
            Nenhum cadastro corresponde à pesquisa
          </h2>
        )}
      </Styled.compStyle>
      {/*       <Styled.navWrapper>
        <ContentNavigation
          handleFirst={handleFirst}
          handleBack={handleBack}
          handleNext={handleNext}
          handleLast={handleLast}
          page={page}
          {...args}
        />
      </Styled.navWrapper> */}
    </Container>
  );
};

ValvesList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number,
  add: PropTypes.func,
  deleteV: PropTypes.func
};
