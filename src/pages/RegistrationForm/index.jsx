import { useRef, useState } from 'react';
import { useEffect } from 'react';

import * as Styled from './styles';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import Links from '../../components/Header/LinksMock';
import { ImgLoader } from '../../components/ImgLoader';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { PageTitle } from '../../components/PageTitle';
import { Section } from '../../components/Section';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import fertRecord from './fertRecMock';
import pestRecord from './pestRecMock';
import { FertilizationRecord } from '../../components/FertilizationRecord';
import { PestRecord } from '../../components/PestRecord';

import { Footer } from '../../components/Footer';

/* 
--> The input fields are separated by groups. They will display:none or display:block depending to the stage 
of the plant (seed, seedling, matrix). Right below we have the groups:

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
    número de folhas,
    data de doação,
  }
  d: {//it's shown in matrix and seedling register pages
    altura,
    endereço,
  },
  e: {//its shown in seedling and seeds register pages
    Árvore matriz,
    bancada,
    registro de doenças e pragas,

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
  const [stageName, setStageName] = useState('Matriz');

  /* To understand this, read the inputFieldGroups comment above */
  //a is always true. No reason to exist.
  //[b, c, d, e]: matrix, seedling, matrix and seedling, seedling and seeds
  const [inputGroup, setInputGroup] = useState([true, false, true, false]);

  const stageRef = useRef();

  const species = ['Jatobá', 'Copaíba', 'Cajueiro', 'Guarantã'];

  useEffect(() => {
    switch (stage) {
      case 0: //matrix
        setInputGroup([true, false, true, false]);
        setStageName('matriz');
        break;
      case 1: //seedling
        setInputGroup([false, true, true, true]);
        setStageName('mudas');
        break;
      case 2: //seed
        setInputGroup([false, false, false, true]);
        setStageName('sementes');
        break;
      default:
        console.log('no one');
    }
  }, [stage, stageRef]);

  const handleStageChange = () => {
    setStage(+stageRef.current.value);
  };

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>{`Cadastro de ${stageName}`}</PageTitle>
          <ImgLoader srcImg="./img/mock/noPhoto.png" />

          {/* Start of the form */}
          <Styled.gridFourColumns>
            {/* Plant stage selection */}
            <Styled.gridCell cStart="1" cEnd="2" visible={true}>
              <label>estágio da Planta</label>
              <Styled.selectInput
                defaultValue={stage}
                fieldW={22}
                ref={stageRef}
                onChange={handleStageChange}>
                <option value={0}>matriz</option>
                <option value={1}>muda</option>
                <option value={2}>semente</option>
              </Styled.selectInput>
            </Styled.gridCell>

            {/* Matrix inputs */}
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[0]}>
              <label>densidade de ocorrência</label>
              <InputFText fieldW={22} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[0]}>
              <label>latitude</label>
              <Styled.inputWrapper2 suffix="graus">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[0]}>
              <label>longitude</label>
              <Styled.inputWrapper2 suffix="graus">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="2" visible={inputGroup[2]}>
              <label>altura da planta</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[0]}>
              <label>altura do fuste</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[0]}>
              <label>altitude</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[0]}>
              <label>CAP</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>formação do tronco</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>formação da copa</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de solo</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>espécie</label>
              <Styled.selectInput fieldW={46}>
                {species.map((specie, index) => {
                  return (
                    <option key={index} value={index}>
                      {specie}
                    </option>
                  );
                })}
              </Styled.selectInput>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de vegetação</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>município</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>nome do determinador</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[2]}>
              <label>endereço</label>
              <InputFText
                fieldW={46}
                type="text"
                placeholder={stage === 1 ? 'lugar para onde a muda foi doada' : ''}
              />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>inst. determinador</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>outras espécies associadas</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCellUp cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>área de coleta</label>
              <InputFText fieldW={46} type="text" />
            </Styled.gridCellUp>

            {/* Seedling inputs */}
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[3]}>
              <label>id da matriz de origem</label>
              <InputFText fieldW={22} type="number" placeholder="XX.XX" />
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[1]}>
              <label>número de folhas</label>
              <Styled.inputWrapper2 suffix="unidades">
                <InputFText fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[3]}>
              <label>data de plantio</label>
              <InputFText fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[3]}>
              <label>data de doação</label>
              <InputFText fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[3]}>
              <label>registro de pragas e doenças</label>
              <PestRecord records={pestRecord} />
            </Styled.gridCell>
            <Styled.gridCellUp cStart="2" cEnd="3" visible={inputGroup[3]}>
              <label>cadastrar</label>
              <Styled.inputWrapper2 suffix="unidades">
                <InputFText fieldW={22} type="number" />
              </Styled.inputWrapper2>
            </Styled.gridCellUp>
            <Styled.gridCellUp cStart="1" cEnd="2" visible={inputGroup[3]}>
              <label>bancada</label>
              <InputFText fieldW={22} type="number" />
            </Styled.gridCellUp>

            {/* Observations and registration*/}
            <Styled.gridCell cStart="3" cEnd="5" visible={true}>
              <label>observações</label>
              <Styled.textAreaStyle rows="5" cols="60" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[0]}>
              <label>registro de adubação</label>
              <FertilizationRecord records={fertRecord} />
            </Styled.gridCell>

            <Styled.gridCell cStart="2" cEnd="4" visible={true}>
              <SubmitBtn
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Cadastrado');
                }}>
                cadastrar/atualizar
              </SubmitBtn>
            </Styled.gridCell>
          </Styled.gridFourColumns>
        </Container>
      </Section>
      <Footer>
        {
          'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
        }
      </Footer>
    </Styled.pageStyle>
  );
};

export default RegistrationForm;
