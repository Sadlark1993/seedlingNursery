import PropTypes from 'prop-types';
import * as Styled from './styles';

export const WelcomeTitle = ({ children }) => {
  return <Styled.compStyle>{children}</Styled.compStyle>;
};

WelcomeTitle.propTypes = {
  children: PropTypes.string.isRequired
};
