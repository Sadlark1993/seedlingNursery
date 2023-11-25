import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { getIrrigationTime } from '../../api/dashBoardApi';
import { Container } from '../Container';

export const TimesList = ({ id, handleClick = (i) => console.log(i) }) => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    (async () => {
      setTimes(await getIrrigationTime(id));
    })();
  }, [id]);

  return (
    <Container
      style={{
        minHeight: '50rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
      }}>
      <Styled.compStyle>
        <Styled.id>ID</Styled.id>
        <Styled.initial>h. inicial</Styled.initial>
        <Styled.final>h. final</Styled.final>
        {times.length ? (
          times.map((row) => (
            <Styled.row key={row.id}>
              <Styled.idCell
                onClick={() => handleClick(Event, row.initialTime, row.finalTime, row.id)}>
                {row.id}
              </Styled.idCell>
              <Styled.initialCell
                onClick={() => handleClick(Event, row.initialTime, row.finalTime, row.id)}>
                {row.initialTime}
              </Styled.initialCell>
              <Styled.finalCell
                onClick={() => handleClick(Event, row.initialTime, row.finalTime, row.id)}>
                {row.finalTime}
              </Styled.finalCell>
              <Styled.deleteCell onClick={() => handleClick(Event, 'delete', 'delete', row.id)}>
                <img src="./img/icons/garbage.svg" />
              </Styled.deleteCell>
            </Styled.row>
          ))
        ) : (
          <h2 style={{ gridColumn: '1/-1' }}>nenhum horário cadastrado</h2>
        )}
      </Styled.compStyle>
    </Container>
  );
};

TimesList.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};
