import PropTypes from 'prop-types';

import * as Styled from './styles';
import { Shelf } from '../Shelf';
//import { Container } from '../Container';

export const ShelvesList = ({ shelvesList = [] }) => {
  return (
    <Styled.compStyle>
      {shelvesList.map((shelf) => (
        <Shelf key={shelf.id} id={shelf.id} count={shelf.count} speciesList={shelf.speciesList} />
      ))}
    </Styled.compStyle>
  );
};

ShelvesList.propTypes = {
  shelvesList: PropTypes.arrayOf(PropTypes.object)
};
