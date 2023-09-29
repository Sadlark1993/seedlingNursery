import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { useEffect } from 'react';

export const PestRecordData = ({ record = null }) => {
  const [recordRows, setRecordRows] = useState([]);

  useEffect(() => {
    if (record) {
      setRecordRows(record.split('#'));
    }
  }, []);

  if (!recordRows.length) return <p>Nenhuma doença registrada</p>;
  return (
    <Styled.compStyle>
      <h2>Registro de Adubação</h2>
      <Styled.table>
        <th>
          <td>doença</td>
          <td>data</td>
        </th>
        {recordRows.map((row, index) => {
          const datas = row.split('|');
          return (
            <tr key={index}>
              <td>{datas[0]}</td>
              <td>{datas[1]}</td>
            </tr>
          );
        })}
      </Styled.table>
    </Styled.compStyle>
  );
};

PestRecordData.propTypes = {
  record: PropTypes.string
};
