import PropTypes from 'prop-types';
import * as Styled from './styles';

export const ContentNavigation = ({ handleFirst, handleBack, handleNext, handleLast, page }) => {
  return (
    <Styled.compStyle>
      <span onClick={handleFirst}>&lt;&lt;</span>
      <span onClick={handleBack}>&lt;</span>
      <span>pg {page}</span>
      <span onClick={handleNext}>&gt;</span>
      <span onClick={handleLast}>&gt;&gt;</span>
    </Styled.compStyle>
  );
};

ContentNavigation.propTypes = {
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number
};
