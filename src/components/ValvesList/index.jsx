import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Container } from '../Container';
import { ContentNavigation } from '../ContentNavigation';

export const ValvesList = ({
  datas = [],
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page = 0,
  ...args
}) => {
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
        <Styled.idCell>ID</Styled.idCell>
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
