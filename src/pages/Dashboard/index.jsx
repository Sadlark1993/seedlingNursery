import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ValvesList } from '../../components/ValvesList';
import { getAllValves, getAllSensors, deleteValve, saveValve } from '../../api/dashBoardApi';
import { SensorsList } from '../../components/SensorsList';
import { useNavigate } from 'react-router-dom';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';

const handleFirst = () => {
  console.log('first');
};
const handleBack = () => {
  console.log('back');
};
const handleNext = () => {
  console.log('next');
};
const handleLast = () => {
  console.log('last');
};

export const DashBoard = () => {
  // 0 -> valves; 1 -> sensors.
  const [content, setContent] = useState(0);
  const [valves, setValves] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [showRegistModal, setShowRegistModal] = useState('');
  const [showSensorModal, setShowSensorModal] = useState('');

  const valveShelfRef = useRef();
  const obsRef = useRef();

  const navigate = useNavigate();

  //gets the data from the API
  useEffect(() => {
    if (content) {
      //dorime
    } else {
      (async () => {
        setValves(await getAllValves());
        setSensors(await getAllSensors());
      })();
    }
  }, [content]);

  const handleDeleteValve = async (id) => {
    await deleteValve(id);
    navigate(0);
  };

  const handleRegister = (event) => {
    if (event.target === event.currentTarget)
      setShowRegistModal(showRegistModal === 'active' ? '' : 'active');
  };

  const handleSensorRegister = (event) => {
    if (event.target === event.currentTarget)
      setShowSensorModal(showSensorModal === 'active' ? '' : 'active');
  };

  const registerValve = async (event) => {
    event.preventDefault();
    console.log('register\n' + obsRef.current.value);
    if (valveShelfRef.current.value && obsRef.current.value.length) {
      const valveObj = {
        shelf: valveShelfRef.current.value,
        observations: obsRef.current.value
      };
      const response = await saveValve(valveObj);
      if (response !== 'ok') console.log(response);
      else navigate(0);
    }
  };

  return (
    <Styled.compStyle>
      <Section background={false}>
        <Container>
          <PageTitle>Dashboard</PageTitle>
          <Styled.selector>
            <Styled.buttonStyle pressed={!content} onClick={() => setContent(0)}>
              Válvulas
            </Styled.buttonStyle>
            <Styled.buttonStyle pressed={!!content} onClick={() => setContent(1)}>
              Sensores
            </Styled.buttonStyle>
          </Styled.selector>
          {content ? (
            <SensorsList
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              datas={sensors}
              page={0}
              add={handleSensorRegister}
            />
          ) : (
            <ValvesList
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              datas={valves}
              page={0}
              add={handleRegister}
              deleteV={handleDeleteValve}
            />
          )}
        </Container>
      </Section>

      {/* register valve modal */}
      <Styled.modal className={showRegistModal} onClick={handleRegister}>
        <Styled.modalRegister>
          <h2>Cadastrar Válvula</h2>
          <form>
            <div className="shelfWrapper">
              <label>Bancada:</label>
              <InputFText
                fieldW={5}
                type="number"
                min={1}
                max={10}
                forwardedRef={valveShelfRef}
                required={true}
              />
            </div>
            <div className="obsWrapper">
              <label>Observações</label>
              <Styled.textAreaStyle
                ref={obsRef}
                rows="5"
                style={{ width: '100%' }}
                required={true}
              />
            </div>

            <SubmitBtn
              style={{ width: '20rem', marginBottom: '1rem', height: '5rem' }}
              onClick={registerValve}>
              Cadastrar
            </SubmitBtn>
          </form>
        </Styled.modalRegister>
      </Styled.modal>

      {/* register sensor modal */}
      <Styled.modal className={showSensorModal} onClick={handleSensorRegister}>
        <Styled.modalRegister>
          <h2>Cadastrar Sensor</h2>
          <form>
            <div className="inputWrapper">
              <label>ID da localização: </label>
              <InputFText
                fieldW={8}
                type="number"
                min={1}
                max={10}
                forwardedRef={null}
                required={true}
              />
            </div>
            <div className="inputWrapper">
              <label>ID do microcontrolador: </label>
              <InputFText fieldW={8} type="number" min={1} max={10} forwardedRef={null} />
            </div>
            <div className="inputWrapper">
              <label>tipo: </label>
              <InputFText
                style={{ width: '100%' }}
                type="text"
                forwardedRef={null}
                required={true}
              />
            </div>
            <div className="inputWrapper">
              <label>unidade de medida </label>
              <InputFText
                style={{ width: '100%' }}
                type="text"
                forwardedRef={null}
                required={true}
              />
            </div>
            <div className="obsWrapper">
              <label>Observações</label>
              <Styled.textAreaStyle ref={null} rows="5" style={{ width: '100%' }} />
            </div>
            <SubmitBtn
              style={{ width: '20rem', marginBottom: '1rem', height: '5rem' }}
              onClick={registerValve}>
              Cadastrar
            </SubmitBtn>
          </form>
        </Styled.modalRegister>
      </Styled.modal>
    </Styled.compStyle>
  );
};
