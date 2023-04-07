import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Footer = ({ children }) => {
  const text = children.split('\n');
  return (
    <Styled.compStyle>
      {text.map((line) => {
        return <p key={Math.random}>{line}</p>;
      })}
    </Styled.compStyle>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
