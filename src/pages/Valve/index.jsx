import * as Styled from './styles';
import { PageTitle } from '../../components/PageTitle';
import { useState } from 'react';

export const Valve = () => {
  const [valve, setValve] = useState('carregando...');

  return (
    <Styled.compStyle>
      <Styled.titleWrapper>
        <Styled.circle color="green" />
        <PageTitle>Válvula {valve} </PageTitle>
        <Styled.circle color="green" />
      </Styled.titleWrapper>
    </Styled.compStyle>
  );
};
