import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Shelf = ({ id, count, speciesList }) => {
  return (
    <Styled.compStyle>
      <Styled.idNumber>
        <span>{id}</span>
      </Styled.idNumber>
      <Styled.count>
        <span>{count} mudas</span>
      </Styled.count>
      <Styled.speciesList>
        <span>{speciesList}</span>
      </Styled.speciesList>
    </Styled.compStyle>
  );
};

Shelf.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  speciesList: PropTypes.string
};
