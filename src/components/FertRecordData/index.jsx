import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { useEffect } from 'react';

export const FertRecordData = ({ record = null }) => {
  const [recordRows, setRecordRows] = useState([]);

  useEffect(() => {
    if (record) {
      setRecordRows(record.split('#'));
    }
  }, []);

  if (!recordRows.length) return <p>Sem registro de adubação</p>;
  return (
    <Styled.compStyle>
      <h2>Registro de Adubação</h2>
      <Styled.table>
        <th>
          <td>tipo</td>
          <td>quant.</td>
          <td>data</td>
        </th>
        {recordRows.map((row, index) => {
          const datas = row.split('|');
          return (
            <tr key={index}>
              <td>{datas[0]}</td>
              <td>{datas[1]}</td>
              <td>{datas[2]}</td>
            </tr>
          );
        })}
      </Styled.table>
    </Styled.compStyle>
  );
};

FertRecordData.propTypes = {
  record: PropTypes.string
};
