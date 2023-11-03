import { useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { getValve } from '../../api/dashBoardApi';
import { useLocation } from 'react-router-dom';
import { SubmitBtn } from '../../components/SubmitBtn';

export const Valve = () => {
  const { state } = useLocation();
  const [valve, setValve] = useState('carregando...');

  useEffect(() => {
    (async () => {
      setValve(await getValve(state));
    })();
  }, []);

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color="green" />
        <PageTitle>Válvula {valve.id} </PageTitle>
        <Styled.circle color="green" />
      </Styled.titleWrapper>
      <SubmitBtn onClick={() => console.log('clicou')}>Cadastrar Horário de Irrigação</SubmitBtn>
    </Styled.compStyle>
  );
};
