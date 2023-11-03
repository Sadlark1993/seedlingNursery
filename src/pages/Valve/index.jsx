import { useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getValve } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';
import { TimesList } from '../../components/TimesList';

export const Valve = () => {
  const { state } = useLocation();
  const [valve, setValve] = useState({});

  useEffect(() => {
    (async () => {
      setValve(await getValve(state));
    })();
  }, []);

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
        <PageTitle>{`Válvula ${valve.id ? valve.id : 'Carregando...'}`}</PageTitle>
        <Styled.circle color={valve.currentState ? 'green' : 'red'} />
      </Styled.titleWrapper>
      <SubmitBtn onClick={() => console.log('clicou')}>Cadastrar Horário de Irrigação</SubmitBtn>
      {valve.id ? <TimesList id={valve.id} /> : <p>Carregando...</p>}
    </Styled.compStyle>
  );
};
