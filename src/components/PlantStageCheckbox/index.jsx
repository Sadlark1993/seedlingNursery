import PropTypes from 'prop-types';
import * as Styled from './styles';

export const PlantStageCheckbox = ({
  seedlings = 1,
  seeds = 1,
  matrixes = 1,
  toggleSeedlings = () => console.log('seedlings toggled'),
  toggleSeeds = () => console.log('seeds toggled'),
  toggleMatrixes = () => console.log('matrixes toggled')
}) => {
  return (
    <Styled.compStyle>
      <Styled.checkboxWrapper onClick={toggleSeedlings}>
        <input type="checkbox" checked={seedlings} readOnly={true} />
        <label>mudas</label>
      </Styled.checkboxWrapper>
      <Styled.checkboxWrapper onClick={toggleSeeds}>
        <input type="checkbox" checked={seeds} readOnly={true} />
        <label>sementes</label>
      </Styled.checkboxWrapper>
      <Styled.checkboxWrapper onClick={toggleMatrixes}>
        <input type="checkbox" checked={matrixes} readOnly={true} />
        <label>matrizes</label>
      </Styled.checkboxWrapper>
    </Styled.compStyle>
  );
};

PlantStageCheckbox.propTypes = {
  seedlings: PropTypes.number,
  seeds: PropTypes.number,
  matrixes: PropTypes.number,
  toggleSeedlings: PropTypes.func,
  toggleSeeds: PropTypes.func,
  toggleMatrixes: PropTypes.func
};
