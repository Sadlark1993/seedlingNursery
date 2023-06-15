import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';
import { InputFText } from '../InputFText';

/* 
  ;descricao | data # descricao | data;
*/

export const PestRecord = ({
  recordsIn = '',
  forwardedRef = useRef(),
  descriptionRef = useRef(),
  dateRef = useRef()
}) => {
  const [records, setRecords] = useState(recordsIn);

  const records2 = records.split('#');

  useEffect(() => {
    dateRef.current.value = '';
    descriptionRef.current.value = '';
    forwardedRef.current = records;
    console.log(records);
  }, [records]);

  const handlePlus = (e) => {
    e.preventDefault();
    if (descriptionRef.current.value.length && dateRef.current.value.length) {
      setRecords(
        (c) =>
          c +
          `${records2.length > 0 ? '#' : ''} ${descriptionRef.current.value}|${
            dateRef.current.value
          }`
      );
    } else {
      window.alert('Preencha os campos descrição e data antes de adicionar um novo');
    }
  };

  return (
    <Styled.compStyle>
      {records2.length > 0 &&
        records2.map((record, index) => {
          const record2 = record.split('|');
          return (
            <Styled.rowStyle key={index}>
              <InputFText fieldW={64} type="text" defaultValue={record2[0]} />
              <InputFText fieldW={14} type="text" defaultValue={record2[1]} />
            </Styled.rowStyle>
          );
        })}
      <Styled.rowStyle key={-1}>
        <InputFText forwardedRef={descriptionRef} fieldW={64} type="text" placeholder="descrição" />
        <InputFText forwardedRef={dateRef} fieldW={14} type="date" />
        <button onClick={handlePlus}>+</button>
      </Styled.rowStyle>
    </Styled.compStyle>
  );
};

PestRecord.propTypes = {
  recordsIn: PropTypes.string,
  forwardedRef: PropTypes.object,
  descriptionRef: PropTypes.object,
  dateRef: PropTypes.object
};
