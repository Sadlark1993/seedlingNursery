import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

import * as Styled from './styles';
import { InputFText } from '../InputFText';

export const FertilizationRecord = ({
  recordsIn = '',
  forwardedRef = useRef(),
  descriptionRef = useRef(),
  amountRef = useRef(),
  dateRef = useRef()
}) => {
  const [records, setRecords] = useState(recordsIn);
  const records2 = records.split('#');

  useEffect(() => {
    dateRef.current.value = '';
    descriptionRef.current.value = '';
    amountRef.current.value = '';
    forwardedRef.current = records;
    console.log(records);
  }, [records]);

  const handlePlus = (e) => {
    e.preventDefault();

    if (descriptionRef.current.value && amountRef.current.value && dateRef.current.value) {
      setRecords(
        (c) =>
          c +
          `${c.length > 5 ? '#' : ''} ${descriptionRef.current.value}|${amountRef.current.value}|${
            dateRef.current.value
          }`
      );
    } else {
      window.alert('Todos os campos devem ser preenchidos');
    }
  };

  return (
    <Styled.compStyle>
      {records.length > 5 &&
        records2.map((record, index) => {
          const record2 = record.split('|');
          return (
            <Styled.rowStyle key={index}>
              <InputFText fieldW={54} type="text" defaultValue={record2[0]} />
              <Styled.inputWrapper>
                <InputFText fieldW={8} type="number" defaultValue={record2[1]} />
              </Styled.inputWrapper>
              <InputFText fieldW={14} type="text" defaultValue={record2[2]} />
            </Styled.rowStyle>
          );
        })}
      <Styled.rowStyle key={-1}>
        <InputFText fieldW={54} type="text" forwardedRef={descriptionRef} placeholder="tipo" />
        <Styled.inputWrapper>
          <InputFText fieldW={8} type="number" forwardedRef={amountRef} placeholder="XX.XX" />
        </Styled.inputWrapper>
        <InputFText fieldW={14} forwardedRef={dateRef} type="date" />
        <button onClick={handlePlus}>+</button>
      </Styled.rowStyle>
    </Styled.compStyle>
  );
};

FertilizationRecord.propTypes = {
  recordsIn: PropTypes.string,
  forwardedRef: PropTypes.object,
  descriptionRef: PropTypes.object,
  amountRef: PropTypes.object,
  dateRef: PropTypes.object
};
