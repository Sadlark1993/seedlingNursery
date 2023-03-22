import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Logo = ({ img }) => {
  return <Styled.compStyle src={img.src} alt={img.alt} />;
};

Logo.propTypes = {
  img: PropTypes.object.isRequired
};
