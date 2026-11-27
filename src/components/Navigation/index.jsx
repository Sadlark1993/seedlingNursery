import PropTypes from 'prop-types';
import { useState } from 'react';

import * as Styled from './styles';
import { NavLink } from '../NavLink';

export const Navigation = ({ links = [{}] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Styled.compStyle>
      <Styled.menuButton
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((c) => !c)}>
        <span />
        <span />
        <span />
      </Styled.menuButton>
      <Styled.linksList $open={open} onClick={() => setOpen(false)}>
        {links.map((link) => {
          return (
            <NavLink key={link.name} link={link.href}>
              {link.name}
            </NavLink>
          );
        })}
      </Styled.linksList>
    </Styled.compStyle>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};
