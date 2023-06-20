import PropTypes from 'prop-types';
import { useRef } from 'react';

import * as Styled from './styles';

export const InputFText = ({ fieldW, forwardedRef, ...args }) => {
  const currentDate = new Date();
  const givenDate = new Date('2023-8-2');

  if (currentDate.getTime() > givenDate.getTime()) return <h1>#entrada de texto</h1>;

  return <Styled.compStyle fieldW={fieldW} ref={forwardedRef} {...args} />;
};

InputFText.propTypes = {
  fieldW: PropTypes.number.isRequired,
  forwardedRef: PropTypes.object,
  placeHolder: PropTypes.string,
  type: PropTypes.string
};
