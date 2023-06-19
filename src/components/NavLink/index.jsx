import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const NavLink = ({ children, link }) => {
  return (
    <Styled.compStyle>
      <Link to={link} state={null}>
        {' '}
        {children}
      </Link>
    </Styled.compStyle>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
