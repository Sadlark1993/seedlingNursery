import PropTypes from 'prop-types';

import * as Styled from './styles';
import { InputFText } from '../InputFText';
export const FertilizationRecord = ({ records = [], handlePlus = () => console.log('plus') }) => {
  return (
    <Styled.compStyle>
      {records.length > 0 &&
        records.map((record, index) => {
          return (
            <Styled.rowStyle key={index}>
              <InputFText fieldW={54} type="text" defaultValue={record.type} />
              <Styled.inputWrapper>
                <InputFText fieldW={8} type="number" defaultValue={record.quant} />
              </Styled.inputWrapper>
              <InputFText fieldW={14} type="date" defaultValue={record.date} />
            </Styled.rowStyle>
          );
        })}
      <Styled.rowStyle key={-1}>
        <InputFText fieldW={54} type="text" placeholder="tipo" />
        <Styled.inputWrapper>
          <InputFText fieldW={8} type="number" placeholder="XX.XX" />
        </Styled.inputWrapper>
        <InputFText fieldW={14} type="date" />
        <button onClick={handlePlus}>+</button>
      </Styled.rowStyle>
    </Styled.compStyle>
  );
};

FertilizationRecord.propTypes = {
  records: PropTypes.array,
  handlePlus: PropTypes.func
};
