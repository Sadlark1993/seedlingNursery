import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ValvesList } from '../../components/ValvesList';
import { getAllValves, deleteValve, saveValve } from '../../api/dashBoardApi';
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

  const registerValve = async () => {
    const valveObj = {
      shelf: valveShelfRef.current.value,
      observations: obsRef.current.value
    };
    const response = await saveValve(valveObj);
    if (response !== 'ok') console.log(response);
    else navigate(0);
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
      <Styled.modal className={showRegistModal} onClick={handleRegister}>
        <Styled.modalRegister>
          <h2>Cadastrar </h2>
          <form>
            <div className="inputsWrapper">
              <div className="shelfWrapper">
                <label>Bancada</label>
                <InputFText fieldW={13} type="number" forwardedRef={valveShelfRef} />
              </div>
              <div className="obsWrapper">
                <label>Observações</label>
                <InputFText fieldW={13} type="text" forwardedRef={obsRef} />
              </div>
            </div>
            <SubmitBtn
              style={{ width: '20rem', marginBottom: '1rem', height: '5rem' }}
              onClick={registerValve}>
              Mudar
            </SubmitBtn>
          </form>
        </Styled.modalRegister>
      </Styled.modal>
    </Styled.compStyle>
  );
};
