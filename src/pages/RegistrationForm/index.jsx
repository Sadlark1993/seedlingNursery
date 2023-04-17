import { useState } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import Links from '../../components/Header/LinksMock';
import { ImgLoader } from '../../components/ImgLoader';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { PageTitle } from '../../components/PageTitle';
import { Section } from '../../components/Section';
import { useEffect } from 'react';

/* 
inputFieldGroups: {
  a: { //it's shown in all register pages
    foto,
    estágio da planta,
    localização atual (bancada ou endereço),
    observações,
  },
  b: { //it's shown only in matrix register page
    especie,
    altura do fuste,
    formação da copa,
    formação do tronco,
    município,
    latitude,
    longitude,
    altitude,
    tipo de solo,
    tipo de vegetação,
    nome do determinador,
    inst. determinador,
    CAP,
    densidade de ocorrência,
    área de coleta,
    outras espécies associadas,
    adubação,

  },
  c: {//it's shown only in seedling register page
    número de folhas;
    data de doação;
  }
  e: {//it's shown in matrix and seedling register pages
    altura;
  },
  f: {//its shown in seedling and seeds register pages
    Árvore matriz;
    bancada;
    registro de doenças e pragas;

  }
}
*/

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const RegistrationForm = () => {
  /* 
  stages = {
    0: matrix,
    1: seedling,
    2: seed
  }
  */
  const [stage, setStage] = useState(0);
  let stageName = 'Matriz';

  useEffect(() => {
    switch (stage) {
      case 0:
        stageName = 'Matriz';
        break;
      case 1:
        stageName = 'Mudas';
        break;
      case 2:
        stageName = 'Sementes';
        break;
    }
  }, [stage]);

  return (
    <>
      <Header>
        {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>Cadastro de {stageName}</PageTitle>
          <ImgLoader srcImg="./img/mock/noPhoto.png" />
        </Container>
      </Section>
    </>
  );
};

export default RegistrationForm;
