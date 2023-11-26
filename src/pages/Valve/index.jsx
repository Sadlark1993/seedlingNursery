import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import {
  getValve,
  submitIrrigationTime,
  deleteIrrigationTime,
  saveValve
} from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';
import { TimesList } from '../../components/TimesList';
import { InputFText } from '../../components/InputFText';
import { Container } from '../../components/Container';

export const Valve = () => {
  const { state } = useLocation();
  const [valve, setValve] = useState({});
  const [showRegistModal, setShowRegistModal] = useState('');
  const [showAlterModal, setShowAlaterModal] = useState('');
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editObs, setEditObs] = useState(false);

  const initialTimeRef = useRef();
  const finalTimeRef = useRef();
  const initialTimeRef2 = useRef();
  const finalTimeRef2 = useRef();
  const valveObsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setValve(await getValve(state));
    })();
  }, []);

  //********************************** Registration Functions **********************************
  const handleRegister = (event) => {
    if (event.target === event.currentTarget) {
      setCurrentRecord(null);
      setShowRegistModal(showRegistModal === 'active' ? '' : 'active');
    }
  };

  const submitTime = async (event) => {
    //can't be null or undefined
    if (!initialTimeRef.current.value && !finalTimeRef.current.value) return;

    event.preventDefault();
    const irrigationTime = {
      id: null,
      initialTime: initialTimeRef.current.value,
      finalTime: finalTimeRef.current.value
    };
    const response = await submitIrrigationTime(irrigationTime, state);
    console.log(response);
    if ((await response) !== 'ok') {
      alert('Erro! Horário não cadastrado. ' + response);
      console.log(response);
    } else {
      navigate(0);
      setShowRegistModal(showRegistModal === 'active' ? '' : 'active');
    }
  };
  //**************************** End Registration Functions ******************************

  //************************* Alteration Functions **************************

  const handleAlter = async (event, initial, final, id) => {
    if (event.target === event.currentTarget) {
      if (id) {
        //clicked on garbage icon? show delete modal.
        if (initial === 'delete') {
          deleteIrrigationTime(id);
          navigate(0);
          return;
        }

        initialTimeRef2.current.value = initial;
        finalTimeRef2.current.value = final;
        setCurrentRecord(id);
      }

      setShowAlaterModal(showAlterModal === 'active' ? '' : 'active');
    }
  };

  const alterTime = async (event) => {
    event.preventDefault();

    //can't be null or undefined
    if (!initialTimeRef2.current.value && !finalTimeRef2.current.value) return;

    const irrigationTime = {
      id: currentRecord,
      initialTime: initialTimeRef2.current.value,
      finalTime: finalTimeRef2.current.value
    };
    const response = await submitIrrigationTime(irrigationTime, state);
    console.log(response);
    if ((await response) !== 'ok') {
      alert('Erro! Horário não cadastrado. ' + response);
      console.log(response);
    } else {
      navigate(0);
      setShowAlaterModal(showAlterModal === 'active' ? '' : 'active');
    }
  };
  //**************************** End Alteration Functions ******************************

  const handleEditObs = () => {
    setEditObs(true);
    //valveObsRef.current.value = valve.observations;
  };

  const handleSaveObs = async () => {
    valve.observations = valveObsRef.current.value;
    const response = await saveValve(valve);
    if (response === 'ok') navigate(0);
    else alert('valve not saved:\n' + response);
  };

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
        <PageTitle>{`Válvula ${valve.id ? valve.id : 'Carregando...'}`}</PageTitle>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
      </Styled.titleWrapper>
      {editObs ? (
        <Container
          style={{
            display: 'flex',
            flexFlow: 'column',
            flexWrap: 'wrap',
            alignItems: 'end'
          }}>
          <Styled.textAreaStyle ref={valveObsRef} defaultValue={valve.observations} />
          <Styled.saveButton onClick={handleSaveObs}>salvar</Styled.saveButton>
        </Container>
      ) : (
        <Styled.valveObs>
          {valve.observations}
          <div onClick={handleEditObs}>
            <img src="./img/icons/edit.svg" />
          </div>
        </Styled.valveObs>
      )}
      <SubmitBtn onClick={handleRegister}>Cadastrar Horário de Irrigação</SubmitBtn>
      {valve.id ? <TimesList id={valve.id} handleClick={handleAlter} /> : <p>Carregando...</p>}
      {/* IrrigationTime Registration Modal */}
      <Styled.modal className={showRegistModal} onClick={handleRegister}>
        <Styled.modalRegister>
          <h2>Novo Horário de Irrigação</h2>
          <form>
            <div className="inputsWrapper">
              <div className="singleInputWrapper">
                <label>horário inicial</label>
                <InputFText fieldW={13} type="time" required={true} forwardedRef={initialTimeRef} />
              </div>
              <div className="singleInputWrapper">
                <label>horário final</label>
                <InputFText fieldW={13} type="time" required={true} forwardedRef={finalTimeRef} />
              </div>
            </div>
            <SubmitBtn
              style={{ width: '20rem', marginBottom: '1rem', height: '5rem' }}
              onClick={submitTime}>
              Cadastrar
            </SubmitBtn>
          </form>
        </Styled.modalRegister>
      </Styled.modal>

      {/* IrrigationTime Alteration Modal */}
      <Styled.modal className={showAlterModal} onClick={handleAlter}>
        <Styled.modalRegister>
          <h2>Horário de Irrigação {currentRecord}</h2>
          <form>
            <div className="inputsWrapper">
              <div className="singleInputWrapper">
                <label>horário inicial</label>
                <InputFText
                  fieldW={13}
                  type="time"
                  required={true}
                  forwardedRef={initialTimeRef2}
                />
              </div>
              <div className="singleInputWrapper">
                <label>horário final</label>
                <InputFText fieldW={13} type="time" required={true} forwardedRef={finalTimeRef2} />
              </div>
            </div>
            <SubmitBtn
              style={{ width: '20rem', marginBottom: '1rem', height: '5rem' }}
              onClick={alterTime}>
              Mudar
            </SubmitBtn>
          </form>
        </Styled.modalRegister>
      </Styled.modal>
    </Styled.compStyle>
  );
};
