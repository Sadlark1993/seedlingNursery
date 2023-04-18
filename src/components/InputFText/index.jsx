import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW, ...args }) => {
  return <Styled.compStyle fieldW={fieldW} {...args} />;
};

InputFText.propTypes = {
  fieldW: PropTypes.number.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string
};
