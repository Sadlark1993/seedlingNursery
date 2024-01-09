import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useEffect, useState } from 'react';

export const SensorRecords = ({ sensorRecords }) => {
  const elements = sensorRecords.length;
  const elementsPerPage = 5;

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    setPrev(page > 1);
    setNext(elementsPerPage * page < sensorRecords.length);
  }, [page, elementsPerPage, sensorRecords]);

  useEffect(() => {
    setSelected(sensorRecords.slice((page - 1) * elementsPerPage, page * elementsPerPage));
  }, [sensorRecords, page, elementsPerPage]);

  const handleFirst = () => {
    setPage(1);
  };

  const handleNext = () => {
    setPage((c) => ++c);
  };

  const handlePrev = () => {
    setPage((c) => --c);
  };

  const handleLast = () => {
    setPage(Math.ceil(sensorRecords.length / elementsPerPage));
  };

  return (
    <Styled.compStyle>
      <Styled.idLabel>ID</Styled.idLabel>
      <Styled.dateLabel>data</Styled.dateLabel>
      <Styled.timeLabel>hora</Styled.timeLabel>
      <Styled.valueLabel>
        <span>valor</span>
        <Styled.nav>
          <Styled.prev onClick={prev ? handleFirst : null} active={prev}>
            {'<<'}
          </Styled.prev>{' '}
          <Styled.prev onClick={prev ? handlePrev : null} active={prev}>
            {'<'}
          </Styled.prev>
          {page}
          <Styled.next onClick={next ? handleNext : null} active={next}>
            {'>'}
          </Styled.next>
          <Styled.next onClick={next ? handleLast : null} active={next}>
            {'>>'}
          </Styled.next>
        </Styled.nav>
      </Styled.valueLabel>
      <ul>
        {selected.map((record) => {
          const time = record.timeStamp.split('T');
          time[0] = time[0].split('-');

          return (
            <Styled.row key={record.id}>
              <Styled.idCell>{record.id}</Styled.idCell>
              <Styled.dateCell>
                {time[0][2]}/{time[0][1]}/{time[0][0]}
              </Styled.dateCell>
              <Styled.timeCell>{time[1].replace(/\..*/, ' ')}</Styled.timeCell>
              <Styled.valueCell>
                {record.value} {record.sensor.mesure}
              </Styled.valueCell>
            </Styled.row>
          );
        })}
      </ul>
    </Styled.compStyle>
  );
};

SensorRecords.propTypes = {
  sensorRecords: PropTypes.arrayOf(PropTypes.object)
};
