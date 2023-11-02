import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ValvesList } from '../../components/ValvesList';
import { getAllValves } from '../../api/dashBoardApi';

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
            ''
          ) : (
            <ValvesList
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              datas={valves}
              page={0}
            />
          )}
        </Container>
      </Section>
    </Styled.compStyle>
  );
};
