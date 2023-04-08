import PropTypes from 'prop-types';
import * as Styled from './styles';

export const PageTitle = ({ children }) => {
  return <Styled.compStyle>{children}</Styled.compStyle>;
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired
};
