import PropTypes from 'prop-types';
import * as Styled from './styles';

export const ContentNavigation = ({
  handleFirst,
  handleBack,
  handleNext,
  handleLast,
  page,
  first = true,
  next = true,
  last = true,
  previous = true
}) => {
  return (
    <Styled.compStyle>
      <span
        style={first ? { color: 'black' } : { color: '#b9b9b9b9' }}
        onClick={first ? handleFirst : null}>
        &lt;&lt;
      </span>
      <span
        style={previous ? { color: 'black' } : { color: '#b9b9b9b9' }}
        onClick={previous ? handleBack : null}>
        &lt;
      </span>
      <span style={{ cursor: 'auto' }}>pg {page}</span>
      <span
        style={next ? { color: 'black' } : { color: '#b9b9b9b9' }}
        onClick={next ? handleNext : null}>
        &gt;
      </span>
      <span
        style={last ? { color: 'black' } : { color: '#b9b9b9b9' }}
        onClick={last ? handleLast : null}>
        &gt;&gt;
      </span>
    </Styled.compStyle>
  );
};

ContentNavigation.propTypes = {
  handleFirst: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  page: PropTypes.number,
  first: PropTypes.bool,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  last: PropTypes.bool
};
