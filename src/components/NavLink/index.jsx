import PropTypes from 'prop-types';
import * as Styled from './styles';

export const NavLink = ({ children, link }) => {
  return <Styled.compStyle href={link}>{children}</Styled.compStyle>;
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
