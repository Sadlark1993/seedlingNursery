import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';

const mockData = [
  {
    id: 1,
    shelf: 2,
    observations:
      'Esta válvula fica no fim da bancada. Ela atualmente é responsável por irrigar os cajueiros e os jatobás',
    currentState: true
  },
  {
    id: 2,
    shelf: 2,
    observations:
      'Esta válvula fica no fim da bancada. Ela atualmente é responsável por irrigar os cajueiros e os jatobás',
    currentState: false
  },
  {
    id: 3,
    shelf: 2,
    observations:
      'Esta válvula fica no fim da bancada. Ela atualmente é responsável por irrigar os cajueiros e os jatobás',
    currentState: false
  },
  {
    id: 4,
    shelf: 2,
    observations:
      'Esta válvula fica no fim da bancada. Ela atualmente é responsável por irrigar os cajueiros e os jatobás',
    currentState: false
  },
  {
    id: 5,
    shelf: 2,
    observations:
      'Esta válvula fica no fim da bancada. Ela atualmente é responsável por irrigar os cajueiros e os jatobás',
    currentState: false
  }
];

export const ValvesList = ({
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
        <Styled.state> </Styled.state>
        <Styled.idNumber>ID</Styled.idNumber>
        <Styled.shelf>bancada</Styled.shelf>
        <Styled.observation>
          <span>observação</span>{' '}
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={page}
            {...args}
          />
        </Styled.observation>
        {datas.length ? (
          datas.map((row) => (
            <Styled.row key={row.id}>
              <Styled.stateCell>
                <Styled.circle color={row.currentState ? 'green' : 'red'} />
              </Styled.stateCell>
              <Styled.idCell>{row.id}</Styled.idCell>
              <Styled.shelfCell>{row.shelf}</Styled.shelfCell>
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

ValvesList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number
};
