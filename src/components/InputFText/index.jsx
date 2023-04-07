import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW, placeHolder, type = 'text' }) => {
  return <Styled.compStyle fieldW={fieldW} placeholder={placeHolder} type={type} />;
};

InputFText.propTypes = {
  fieldW: PropTypes.number.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string
};
