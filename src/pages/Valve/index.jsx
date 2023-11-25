import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getValve, submitIrrigationTime, deleteIrrigationTime } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';
import { TimesList } from '../../components/TimesList';
import { InputFText } from '../../components/InputFText';

export const Valve = () => {
  const { state } = useLocation();
  const [valve, setValve] = useState({});
  const [showRegistModal, setShowRegistModal] = useState('');
  const [showAlterModal, setShowAlaterModal] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState('');
  const [currentRecord, setCurrentRecord] = useState(null);

  const initialTimeRef = useRef();
  const finalTimeRef = useRef();
  const initialTimeRef2 = useRef();
  const finalTimeRef2 = useRef();
  const deleteRef = useRef();

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

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
        <PageTitle>{`Válvula ${valve.id ? valve.id : 'Carregando...'}`}</PageTitle>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
      </Styled.titleWrapper>
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
                <InputFText fieldW={13} type="time" forwardedRef={initialTimeRef} />
              </div>
              <div className="singleInputWrapper">
                <label>horário final</label>
                <InputFText fieldW={13} type="time" forwardedRef={finalTimeRef} />
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
                <InputFText fieldW={13} type="time" forwardedRef={initialTimeRef2} />
              </div>
              <div className="singleInputWrapper">
                <label>horário final</label>
                <InputFText fieldW={13} type="time" forwardedRef={finalTimeRef2} />
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
