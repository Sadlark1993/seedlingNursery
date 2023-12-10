import PropTypes from 'prop-types';
import * as Styled from './styles';

export const SensorRecords = ({ sensorRecords }) => {
  const elements = sensorRecords.length;

  return (
    <Styled.compStyle>
      <Styled.idLabel>ID</Styled.idLabel>
      <Styled.dateLabel>data</Styled.dateLabel>
      <Styled.timeLabel>hora</Styled.timeLabel>
      <Styled.valueLabel>
        <span>valor</span>
        <span>{elements} elementos</span>
      </Styled.valueLabel>
      <ul>
        {sensorRecords.map((record) => {
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
