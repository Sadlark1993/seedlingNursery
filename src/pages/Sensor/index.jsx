import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getSensor, saveSensor } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';
import { TimesList } from '../../components/TimesList';
import { InputFText } from '../../components/InputFText';
import { Container } from '../../components/Container';

export const Sensor = () => {
  const { state } = useLocation();
  const [sensor, setSensor] = useState({});
  const [showRegistModal, setShowRegistModal] = useState('');
  const [showAlterModal, setShowAlaterModal] = useState('');
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editObs, setEditObs] = useState(false);

  const initialTimeRef = useRef();
  const finalTimeRef = useRef();
  const initialTimeRef2 = useRef();
  const finalTimeRef2 = useRef();
  const sensorObsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setSensor(await getSensor(state));
    })();
  }, []);

  //********************************** Registration Functions **********************************
  const handleRegister = (event) => {
    if (event.target === event.currentTarget) {
      setCurrentRecord(null);
      setShowRegistModal(showRegistModal === 'active' ? '' : 'active');
    }
  };

  //************************* Alteration Functions **************************

  const handleAlter = async (event, initial, final, id) => {
    if (event.target === event.currentTarget) {
      if (id) {
        initialTimeRef2.current.value = initial;
        finalTimeRef2.current.value = final;
        setCurrentRecord(id);
      }

      setShowAlaterModal(showAlterModal === 'active' ? '' : 'active');
    }
  };
  //**************************** End Alteration Functions ******************************

  const handleEditObs = () => {
    setEditObs(true);
    //sensorObsRef.current.value = valve.observations;
  };

  const handleSaveObs = async () => {
    sensor.observations = sensorObsRef.current.value;
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
          <Styled.saveButton onClick={handleSaveObs}>salvar</Styled.saveButton>
        </Container>
      ) : (
        <Container style={{ minHeight: '60rem' }}>
          <Styled.valveObs>{sensor.observations}</Styled.valveObs>
          <Styled.sensorDataWrapper>
            <span>Microcontrolador: {sensor.idMicrocontroller}</span>
            <span>Localização: {sensor.idLocation}</span>
            <span>Tipo: {sensor.type}</span>
            <span>Unidade de medida: {sensor.mesure}</span>
          </Styled.sensorDataWrapper>
        </Container>
      )}
      {/*  {valve.id ? <TimesList id={valve.id} handleClick={handleAlter} /> : <p>Carregando...</p>} */}

      {/* IrrigationTime Registration Modal */}

      {/* IrrigationTime Alteration Modal */}
    </Styled.compStyle>
  );
};
