import PropTypes from 'prop-types';

import * as Styled from './styles';
import { InputFText } from '../InputFText';
export const PestRecord = ({ records = [], handlePlus = () => console.log('plus') }) => {
  return (
    <Styled.compStyle>
      {records.length > 0 &&
        records.map((record, index) => {
          return (
            <Styled.rowStyle key={index}>
              <InputFText fieldW={64} type="text" defaultValue={record.type} />
              <InputFText fieldW={14} type="date" defaultValue={record.date} />
            </Styled.rowStyle>
          );
        })}
      <Styled.rowStyle key={-1}>
        <InputFText fieldW={64} type="text" placeholder="descrição" />
        <InputFText fieldW={14} type="date" />
        <button onClick={handlePlus}>+</button>
      </Styled.rowStyle>
    </Styled.compStyle>
  );
};

PestRecord.propTypes = {
  records: PropTypes.array,
  handlePlus: PropTypes.func
};
