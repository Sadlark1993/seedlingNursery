import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW }) => {
  return <Styled.compStyle fieldW={fieldW} placeholder="email" />;
};

InputFText.propTypes = {
  fieldW: PropTypes.number.isRequired
};
