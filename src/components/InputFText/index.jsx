import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW, forwardedRef, ...args }) => {
  return <Styled.compStyle fieldW={fieldW} ref={forwardedRef} {...args} />;
};

InputFText.propTypes = {
  fieldW: PropTypes.number,
  forwardedRef: PropTypes.object,
  placeHolder: PropTypes.string,
  type: PropTypes.string
};
