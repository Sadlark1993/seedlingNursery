import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Container = ({ children, ...args }) => {
  return <Styled.compStyle {...args}>{children}</Styled.compStyle>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};
