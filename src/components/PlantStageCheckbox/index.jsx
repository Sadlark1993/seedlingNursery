import PropTypes from 'prop-types';
import * as Styled from './styles';

export const PlantStageCheckbox = () => {
  return (
    <Styled.compStyle>
      <Styled.checkboxWrapper>
        <input type="checkbox" />
        <label>mudas</label>
      </Styled.checkboxWrapper>
      <Styled.checkboxWrapper>
        <input type="checkbox" />
        <label>sementes</label>
      </Styled.checkboxWrapper>
      <Styled.checkboxWrapper>
        <input type="checkbox" />
        <label>matrizes</label>
      </Styled.checkboxWrapper>
    </Styled.compStyle>
  );
};

PlantStageCheckbox.propTypes = {
  children: PropTypes.node.isRequired
};
