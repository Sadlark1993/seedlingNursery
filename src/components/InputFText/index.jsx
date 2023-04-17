import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW, placeHolder, type = 'text', visible }) => {
  return (
    <Styled.compStyle fieldW={fieldW} placeholder={placeHolder} visible={visible} type={type} />
  );
};

InputFText.propTypes = {
  fieldW: PropTypes.number.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  visible: PropTypes.bool.isRequired
};
