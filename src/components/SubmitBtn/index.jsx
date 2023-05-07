import PropTypes from 'prop-types';
import * as Styled from './styles';

export const SubmitBtn = ({ children, onClick }) => {
  return (
    <Styled.compStyle type="submit" onClick={onClick}>
      {children}
    </Styled.compStyle>
  );
};

SubmitBtn.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
