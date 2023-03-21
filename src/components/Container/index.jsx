import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Container = ({ children }) => {
  return <Styled.compStyle>{children}</Styled.compStyle>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};
