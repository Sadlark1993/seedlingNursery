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
      <h2>Registro de Pragas e Doenças</h2>
      <Styled.table>
        <tr>
          <th style={{ width: '85%' }}>doença</th>
          <th style={{ width: '15%' }}>data</th>
        </tr>
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
