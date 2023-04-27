import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children, background = false, forwardRef, ...args }) => {
  return (
    <Styled.compStyle ref={forwardRef} background={background} {...args}>
      {children}
    </Styled.compStyle>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  forwardRef: PropTypes.object
};
