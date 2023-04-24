import PropTypes from 'prop-types';

import * as Styled from './styles';
import { Shelf } from '../Shelf';
//import { Container } from '../Container';

export const ShelvesList = ({ shelvesList = [], ...args }) => {
  return (
    <Styled.compStyle>
      {shelvesList.map((shelf) => (
        <Shelf
          key={shelf.id}
          id={shelf.id}
          count={shelf.count}
          speciesList={shelf.speciesList}
          {...args}
        />
      ))}
    </Styled.compStyle>
  );
};

ShelvesList.propTypes = {
  shelvesList: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
};
