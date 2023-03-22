import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Header = ({ children = [] }) => {
  return <Styled.compStyle>{children.map((child) => child)}</Styled.compStyle>;
};

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};
