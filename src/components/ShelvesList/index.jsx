import PropTypes from 'prop-types';

import * as Styled from './styles';
import { Shelf } from '../Shelf';
//import { Container } from '../Container';

export const ShelvesList = ({ speciesList = [], countList = [], ...args }) => {
  let id = 0;
  return (
    <Styled.compStyle>
      {countList.map((shelf) => {
        id++;
        return (
          <Shelf
            key={id}
            id={id}
            count={countList[id - 1] || 0}
            speciesList={speciesList[id - 1] || ''}
            {...args}
          />
        );
      })}
    </Styled.compStyle>
  );
};

ShelvesList.propTypes = {
  speciesList: PropTypes.arrayOf(PropTypes.string),
  countList: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func
};
