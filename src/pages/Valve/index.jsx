import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getValve, submitIrrigationTime } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';
import { TimesList } from '../../components/TimesList';
import { InputFText } from '../../components/InputFText';

export const Valve = () => {
  const { state } = useLocation();
  const [valve, setValve] = useState({});
  const [showRegistModal, setShowRegistModal] = useState('');

  const initialTimeRef = useRef();
  const finalTimeRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setValve(await getValve(state));
    })();
  }, []);

  const handleRegister = (event) => {
    if (event.target === event.currentTarget) {
      setShowRegistModal(showRegistModal === 'active' ? '' : 'active');
    }
  };

  const submitTime = async (event) => {
    event.preventDefault();
    const irrigationTime = {
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

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
        <PageTitle>{`Válvula ${valve.id ? valve.id : 'Carregando...'}`}</PageTitle>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
      </Styled.titleWrapper>
      <SubmitBtn onClick={handleRegister}>Cadastrar Horário de Irrigação</SubmitBtn>
      {valve.id ? <TimesList id={valve.id} /> : <p>Carregando...</p>}

      {/* IrrigationTime Modal */}
      <Styled.modal className={showRegistModal} onClick={handleRegister}>
        <Styled.modalRegister>
          <h2>Novo Horário de Irrigação</h2>
          <form>
            <div className="inputWrapper">
              <div style={{ width: '50%', textAlign: 'center' }}>
                <label>horário inicial</label>
                <InputFText fieldW={13} type="time" forwardedRef={initialTimeRef} />
              </div>
              <div style={{ width: '50%', textAlign: 'center' }}>
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
    </Styled.compStyle>
  );
};
