import PropTypes from 'prop-types';

import * as Styled from './styles';
import { NavLink } from '../NavLink';

export const Navigation = ({ links = [{}] }) => {
  return (
    <Styled.compStyle>
      {links.map((link) => {
        return (
          <NavLink key={link.name} link={link.href}>
            {link.name}
          </NavLink>
        );
      })}
    </Styled.compStyle>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};
