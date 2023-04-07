import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children, background = false }) => {
  return <Styled.compStyle background={background}>{children}</Styled.compStyle>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool
};
