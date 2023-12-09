import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getSensor, saveSensor } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { SubmitBtn } from '../../components/SubmitBtn';

export const Sensor = () => {
  const { state } = useLocation();
  const [sensor, setSensor] = useState({});
  const [editObs, setEditObs] = useState(false);

  const sensorObsRef = useRef();
  const microRef = useRef();
  const locationRef = useRef();
  const typeRef = useRef();
  const mesureRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setSensor(await getSensor(state));
    })();
  }, []);

  //********************************** Registration Functions **********************************

  const handleEditObs = () => {
    setEditObs((c) => !c);
    //sensorObsRef.current.value = valve.observations;
  };

  const handleSaveObs = async () => {
    sensor.observations = sensorObsRef.current.value;
    sensor.idMicrocontroller = microRef.current.value;
    sensor.idLocation = locationRef.current.value;
    sensor.type = typeRef.current.value;
    sensor.mesure = mesureRef.current.value;
    const response = await saveSensor(sensor);
    if (response === 'ok') navigate(0);
    else alert('ERRO. Válvula não foi salva');
  };

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <PageTitle>{`Sensor ${sensor.id ? sensor.id : 'Carregando...'}`}</PageTitle>
        <Styled.editBtn onClick={handleEditObs}>
          <img src="./img/icons/edit.svg" />
        </Styled.editBtn>
      </Styled.titleWrapper>
      {editObs ? (
        <Container
          style={{
            display: 'flex',
            flexFlow: 'column',
            flexWrap: 'wrap',
            alignItems: 'end'
          }}>
          <Styled.textAreaStyle ref={sensorObsRef} defaultValue={sensor.observations} />
          <Styled.inputsWrapper>
            <Styled.singleInput>
              <label>Id do Microcontrolador:</label>
              <input
                style={{ width: '8rem' }}
                ref={microRef}
                defaultValue={sensor.idMicrocontroller}
              />
            </Styled.singleInput>
            <Styled.singleInput>
              <label>Id da Localização:</label>
              <input style={{ width: '8rem' }} ref={locationRef} defaultValue={sensor.idLocation} />
            </Styled.singleInput>
            <Styled.singleInput>
              <label>Tipo:</label>
              <input style={{ width: '100%' }} ref={typeRef} defaultValue={sensor.type} />
            </Styled.singleInput>
            <Styled.singleInput>
              <label>Unidade de medida:</label>
              <input style={{ width: '100%' }} ref={mesureRef} defaultValue={sensor.mesure} />
            </Styled.singleInput>
          </Styled.inputsWrapper>
          <Styled.saveButton onClick={handleSaveObs}>salvar</Styled.saveButton>
        </Container>
      ) : (
        <>
          <Container>
            <Styled.valveObs>{sensor.observations}</Styled.valveObs>
            <Styled.sensorDataWrapper>
              <span>Microcontrolador: {sensor.idMicrocontroller}</span>
              <span>Localização: {sensor.idLocation}</span>
              <span>Tipo: {sensor.type}</span>
              <span>Unidade de medida: {sensor.mesure}</span>
            </Styled.sensorDataWrapper>
          </Container>

          {/* Load data button */}
          <Container>
            <h3>Carregar leituras:</h3>
            <Styled.loadDataWrapper>
              <span>de</span>
              <input type="date" />
              <span>até</span>
              <input type="date" />
              <SubmitBtn>buscar</SubmitBtn>
            </Styled.loadDataWrapper>
          </Container>
        </>
      )}

      {/*  {valve.id ? <TimesList id={valve.id} handleClick={handleAlter} /> : <p>Carregando...</p>} */}

      {/* IrrigationTime Registration Modal */}

      {/* IrrigationTime Alteration Modal */}
    </Styled.compStyle>
  );
};
