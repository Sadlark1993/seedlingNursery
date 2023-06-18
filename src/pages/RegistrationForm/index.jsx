import { useRef, useState, useContext } from 'react';
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
import { FertilizationRecord } from '../../components/FertilizationRecord';
import { PestRecord } from '../../components/PestRecord';
import { DataContext } from '../../contexts/Data';
import { Footer } from '../../components/Footer';
import defaultImg from './defaultImg';

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
  //const pestRecord = 'description1|2021-09-11#description2|2021-09-11#description3|2021-09-11';
  //const fertRecord ='description1|1kg|2021-09-11#description2|1kg|2021-09-11#description3|1kg|2021-09-11';
  const pestRecord = '';
  const fertRecord = '';

  const { species, plants } = useContext(DataContext); //gets the list of plants and species from context
  const [stage, setStage] = useState(0);
  const [stageName, setStageName] = useState('Matriz');

  /* To understand this, read the inputFieldGroups comment above */
  //a is always true. No reason to exist.
  //[b, c, d, e]: matrix, seedling, matrix and seedling, seedling and seeds
  const [inputGroup, setInputGroup] = useState([true, false, true, false]);
  const speciesNames = species.map((specie) => {
    return specie.nomeComum;
  });

  //refs------
  const stageRef = useRef();
  const densidadeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const alturaRef = useRef();
  const fusteRef = useRef();
  const altitudeRef = useRef();
  const capRef = useRef();
  const formTroncoRef = useRef();
  const formCopaRef = useRef();
  const tipoSoloRef = useRef();
  const especieRef = useRef();
  const vegetacaoRef = useRef();
  const municipioRef = useRef();
  const determinadorRef = useRef();
  const enderecoRef = useRef();
  const instDeterminadorRef = useRef();
  const associadasRef = useRef();
  const areaColetaRef = useRef();
  const matrizOrigemRef = useRef();
  const numFolhasRef = useRef();
  const dataPlantioRef = useRef();
  const dataDoacaoRef = useRef();
  const pestDescriptionRef = useRef(); // <---- pestRecord
  const pestDateRef = useRef();
  const pestRecordRef = useRef();
  const fertRecordRef = useRef(); // <------ fertRecord
  const fertDescriptionRef = useRef();
  const fertAmountRef = useRef();
  const fertDateRef = useRef();
  const bancadaRef = useRef();
  const obsRef = useRef();
  const imgRef = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const registroAdubacao =
      fertRecordRef.current +
      (fertRecordRef.current.length > 0 ? '#' : '') +
      (fertDescriptionRef.current.value.length > 0 &&
      fertAmountRef.current.value.length > 0 &&
      fertDateRef.current.value.length > 0
        ? fertDescriptionRef.current.value +
          '|' +
          fertAmountRef.current.value +
          '|' +
          fertDateRef.current.value
        : '');

    const registroDoenca =
      pestRecordRef.current +
      (pestRecordRef.current.length > 0 ? '#' : '') +
      (pestDescriptionRef.current.value.length > 0 && pestDateRef.current.value.length > 0
        ? pestDescriptionRef.current.value + '|' + pestDateRef.current.value
        : '');

    const submitObj = {
      /* inserindo campos q faltaram como string no campo "nome comum" */
      /* nomeComum: `${stageRef.current.value};${especieRef.current.value};${numFolhasRef.current.value};${dataPlantioRef.current.value};${dataDoacaoRef.current.value};${bancadaRef.current.value};${instDeterminadorRef.current.value};${enderecoRef.current.value};${matrizOrigemRef.current.value};${obsRef.current.value};${registroAdubacao};${registroDoenca}`, */
      nomeComum: especieRef.current.value,
      nomeCientifico: 'dorime',
      uf: 'Mato Fino', //<-- ja incluso no municipio
      /*       id: generateId(), */
      //estagio: stageRef.current.value,
      densidadeOcorrencia: +densidadeRef.current.value,
      lagitude: latitudeRef.current.value, //<-- typing error in backend
      longitude: longitudeRef.current.value,
      alturaArvore: +alturaRef.current.value,
      alturaFuste: +fusteRef.current.value,
      altitude: altitudeRef.current.value,
      cap: +capRef.current.value,
      formacaoTronco: formTroncoRef.current.value,
      formacaoCopa: formCopaRef.current.value,
      tipoSolo: tipoSoloRef.current.value,
      //especie: especieRef.current.value,
      tipovegetacao: vegetacaoRef.current.value,
      cidade: municipioRef.current.value,
      nomeDeterminador: determinadorRef.current.value,
      // endereco: enderecoRef.current.value,
      //instDeterminador: instDeterminadorRef.current.value,
      especiesAssociadas: associadasRef.current.value,
      enderecoColeta: areaColetaRef.current.value,
      //matrizOrigem: matrizOrigemRef.current.value,
      //numFolhas: numFolhasRef.current.value,
      //dataPlantio: dataPlantioRef.current.value,
      //dataDoacao: dataDoacaoRef.current.value,
      //bancada: bancadaRef.current.value,
      //observacoes: obsRef.current.value,
      observacoes: `${stage};${especieRef.current.value};${numFolhasRef.current.value};${dataPlantioRef.current.value};${dataDoacaoRef.current.value};${bancadaRef.current.value};${instDeterminadorRef.current.value};${enderecoRef.current.value};${matrizOrigemRef.current.value};${obsRef.current.value};${registroAdubacao};${registroDoenca}`,
      imagemMatriz:
        imgRef.current && imgRef.current.length > 10 ? imgRef.current : defaultImg.base64,
      quantidadeSementes: 1
    };
    submitToDatabase(submitObj);
  };

  const submitToDatabase = async (plantObj) => {
    fetch('arvoreMatriz/save', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(plantObj)
    })
      .then((response) => {
        console.log('object submit');
        location.reload();
      })
      .catch((rejection) => {
        console.log(rejection);
        alert(rejection);
      });
  };

  const generateId = () => {
    let id = 1;
    let flag = true;
    while (flag) {
      flag = false;
      plants.forEach((plant) => {
        if (plant.id === id) {
          ++id;
          flag = true;
        }
      });
    }
    return id;
  };

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>{`Cadastro de ${stageName}`}</PageTitle>
          <ImgLoader forwardedRef={imgRef} srcImg="./img/mock/noPhoto.png" />

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
              <InputFText forwardedRef={densidadeRef} fieldW={22} type="number" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[0]}>
              <label>latitude</label>
              <Styled.inputWrapper2 suffix="graus">
                <InputFText
                  forwardedRef={latitudeRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[0]}>
              <label>longitude</label>
              <Styled.inputWrapper2 suffix="graus">
                <InputFText
                  forwardedRef={longitudeRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="2" visible={inputGroup[2]}>
              <label>altura da planta</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText
                  forwardedRef={alturaRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[0]}>
              <label>altura do fuste</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText forwardedRef={fusteRef} fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[0]}>
              <label>altitude</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText
                  forwardedRef={altitudeRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[0]}>
              <label>CAP</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText forwardedRef={capRef} fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>formação do tronco</label>
              <InputFText forwardedRef={formTroncoRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>formação da copa</label>
              <InputFText forwardedRef={formCopaRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de solo</label>
              <InputFText forwardedRef={tipoSoloRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>espécie</label>
              <Styled.selectInput ref={especieRef} fieldW={46}>
                {speciesNames.map((specie, index) => {
                  return (
                    <option key={index} value={specie}>
                      {specie}
                    </option>
                  );
                })}
              </Styled.selectInput>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de vegetação</label>
              <InputFText forwardedRef={vegetacaoRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>município</label>
              <InputFText forwardedRef={municipioRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>nome do determinador</label>
              <InputFText forwardedRef={determinadorRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[2]}>
              <label>endereço</label>
              <InputFText
                forwardedRef={enderecoRef}
                fieldW={46}
                type="text"
                placeholder={stage === 1 ? 'lugar para onde a muda foi doada' : ''}
              />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>inst. determinador</label>
              <InputFText forwardedRef={instDeterminadorRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>outras espécies associadas</label>
              <InputFText forwardedRef={associadasRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCellUp cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>área de coleta</label>
              <InputFText forwardedRef={areaColetaRef} fieldW={46} type="text" />
            </Styled.gridCellUp>

            {/* Seedling inputs */}
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[3]}>
              <label>id da matriz de origem</label>
              <InputFText
                forwardedRef={matrizOrigemRef}
                fieldW={22}
                type="number"
                placeholder="XX.XX"
              />
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[1]}>
              <label>número de folhas</label>
              <Styled.inputWrapper2 suffix="unidades">
                <InputFText
                  forwardedRef={numFolhasRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[3]}>
              <label>data de plantio</label>
              <InputFText forwardedRef={dataPlantioRef} fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[3]}>
              <label>data de doação</label>
              <InputFText forwardedRef={dataDoacaoRef} fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[3]}>
              <label>registro de pragas e doenças</label>
              <PestRecord
                recordsIn={pestRecord}
                forwardedRef={pestRecordRef}
                descriptionRef={pestDescriptionRef}
                dateRef={pestDateRef}
              />
            </Styled.gridCell>

            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[3]}>
              <label>registro de adubação</label>
              <FertilizationRecord
                recordsIn={fertRecord}
                forwardedRef={fertRecordRef}
                descriptionRef={fertDescriptionRef}
                amountRef={fertAmountRef}
                dateRef={fertDateRef}
              />
            </Styled.gridCell>

            <Styled.gridCellUp cStart="1" cEnd="2" visible={inputGroup[3]}>
              <label>bancada</label>
              <InputFText forwardedRef={bancadaRef} fieldW={22} type="number" />
            </Styled.gridCellUp>

            {/* Observations and registration*/}
            <Styled.gridCell cStart="3" cEnd="5" visible={true}>
              <label>observações</label>
              <Styled.textAreaStyle ref={obsRef} rows="5" cols="60" />
            </Styled.gridCell>

            <Styled.gridCell cStart="2" cEnd="4" visible={true}>
              <SubmitBtn onClick={handleSubmit}>cadastrar/atualizar</SubmitBtn>
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
