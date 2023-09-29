import { useRef, useState, useContext } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
import { getPlantById } from '../../api/plantsApi';
import { getAllSpecies } from '../../api/speciesApi';

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
  //let pestRecord = '';
  //let fertRecord = '';
  //let loadImg = defaultImg.base64;

  const { state } = useLocation();
  const navigate = useNavigate();
  const [species, setSpecies] = useState(null);
  const [plant, setPlant] = useState(null);

  const [stage, setStage] = useState(0);
  const [stageName, setStageName] = useState('Matriz');
  const [update, setUpdate] = useState(false);
  //const [loadImg, setLoadImg] = useState(defaultImg.base64);
  const [pestRecord, setPestRecord] = useState('');
  const [fertRecord, setFertRecord] = useState('');
  const [imgKey, setImgKey] = useState(0); //to force rerendering
  const [fertKey, setFertKey] = useState(0);
  const [pestKey, setPestKey] = useState(0);

  /* To understand this, read the inputFieldGroups comment above */
  //a is always true. No reason to exist.
  //[b, c, d, e]: matrix, seedling, matrix and seedling, seedling and seeds
  const [inputGroup, setInputGroup] = useState([true, false, true, false]);

  //refs------
  const stageRef = useRef(); //<
  const densityRef = useRef(); //<
  const latitudeRef = useRef(); //<
  const longitudeRef = useRef(); //<
  const heightRef = useRef(); //<
  const shaftRef = useRef(); //<
  const altitudeRef = useRef(); //<
  const capRef = useRef(); //<
  const trunkFormationRef = useRef(); //<
  const cupFormationRef = useRef(); //<
  const soilTypeRef = useRef(); //<
  const especieRef = useRef(); //<
  const vegetationRef = useRef(); //<
  const cityRef = useRef(); //<
  const determiningRef = useRef(); //<
  const enderecoRef = useRef(); //<
  const instDetRef = useRef(); //<
  const associatedSpeciesRef = useRef(); //<
  const pickupAddressRef = useRef(); //<
  const originMatrixRef = useRef(); //<
  const leafsRef = useRef(); //<
  const plantingDateRef = useRef(); //<
  const donationDateRef = useRef(); //<
  const pestDescriptionRef = useRef(); // <---- pestRecord //<
  const pestDateRef = useRef();
  const pestRecordRef = useRef();
  const fertRecordRef = useRef(); // <------ fertRecord //<
  const fertDescriptionRef = useRef();
  const fertAmountRef = useRef();
  const fertDateRef = useRef();
  const shelfRef = useRef(); //<
  const obsRef = useRef(); //<
  const imgRef = useRef(); //<
  const startRef = useRef();

  useEffect(() => {
    if (state) {
      (async () => {
        const plantObj = await getPlantById(state);
        const speciesObj = await getAllSpecies();
        setPlant(await plantObj);
        setSpecies(await speciesObj);
      })();
    }
  }, []);

  useEffect(() => {
    if (!state || (plant && species)) {
      console.log(plant);
      startRef.current.scrollIntoView({ block: 'start' });
      console.log('state: ', state);
      if (state) {
        updateReference();
        setUpdate(false);
      }
    }
  }, [plant, species]);

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

  //function that update the form fields with the datas of the selected plant
  const updateReference = async () => {
    const referenceObj = await getPlantById(state);
    setStage(+referenceObj.stage);
    stageRef.current.value = +referenceObj.stage;
    densityRef.current.value = referenceObj.occurrenceDensity;
    latitudeRef.current.value = referenceObj.latitude;
    longitudeRef.current.value = referenceObj.longitude;
    heightRef.current.value = referenceObj.height;
    shaftRef.current.value = referenceObj.shaftHeight;
    altitudeRef.current.value = referenceObj.altitude;
    capRef.current.value = referenceObj.cap;
    trunkFormationRef.current.value = referenceObj.trunkFormation;
    cupFormationRef.current.value = referenceObj.cupFormation;
    soilTypeRef.current.value = referenceObj.soilType;
    especieRef.current.value = referenceObj.specie;
    vegetationRef.current.value = referenceObj.vegetationType;
    cityRef.current.value = referenceObj.city;
    determiningRef.current.value = referenceObj.determiningName;
    enderecoRef.current.value = referenceObj.address;
    instDetRef.current.value = referenceObj.detInst;
    associatedSpeciesRef.current.value = referenceObj.associatedSpecies;
    pickupAddressRef.current.value = referenceObj.pickupAddress;
    originMatrixRef.current.value = referenceObj.originMatrix;
    leafsRef.current.value = referenceObj.leafs;
    plantingDateRef.current.value = referenceObj.plantingDate;
    donationDateRef.current.value = referenceObj.donationDate;
    setPestRecord(referenceObj.pestRecord);
    setFertRecord(referenceObj.fertRecord);
    shelfRef.current.value = referenceObj.shelf;
    obsRef.current.value = referenceObj.observations;
    //setLoadImg('data:image/png;base64,' + referenceObj.imagemMatriz);
    //setImgKey((c) => ++c);
    setFertKey((c) => ++c);
    setPestKey((c) => ++c);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fertRecord =
      fertRecordRef.current +
      (fertRecordRef.current.length > 1 &&
      fertDescriptionRef.current.value.length > 1 &&
      fertAmountRef.current.value.length > 1 &&
      fertDateRef.current.value.length > 1
        ? '#'
        : '') +
      (fertDescriptionRef.current.value.length > 1 &&
      fertAmountRef.current.value.length > 1 &&
      fertDateRef.current.value.length > 1
        ? fertDescriptionRef.current.value +
          '|' +
          fertAmountRef.current.value +
          '|' +
          fertDateRef.current.value
        : '');

    const pestRecord =
      pestRecordRef.current +
      (pestRecordRef.current.length > 1 &&
      pestDescriptionRef.current.value.length > 1 &&
      pestDateRef.current.value.length > 1
        ? '#'
        : '') +
      (pestDescriptionRef.current.value.length > 1 && pestDateRef.current.value.length > 1
        ? pestDescriptionRef.current.value + '|' + pestDateRef.current.value
        : '');

    const submitObj = {
      /* inserindo campos q faltaram como string no campo "nome comum" */
      /* nomeComum: `${stageRef.current.value};${especieRef.current.value};${leafsRef.current.value};${plantingDateRef.current.value};${donationDateRef.current.value};${shelfRef.current.value};${instDetRef.current.value};${enderecoRef.current.value};${originMatrixRef.current.value};${obsRef.current.value};${fertRecord};${pestRecord}`, */
      stage: stageRef.current.value,
      occurrenceDensity: +densityRef.current.value,
      latitude: latitudeRef.current.value,
      longitude: longitudeRef.current.value,
      height: +heightRef.current.value,
      shaftHeight: +shaftRef.current.value,
      altitude: altitudeRef.current.value,
      cap: +capRef.current.value,
      trunkFormation: trunkFormationRef.current.value,
      cupFormation: cupFormationRef.current.value,
      soilType: soilTypeRef.current.value,
      specie: especieRef.current.value,
      vegetationType: vegetationRef.current.value,
      city: cityRef.current.value,
      determiningName: determiningRef.current.value,
      address: enderecoRef.current.value,
      detInst: instDetRef.current.value,
      associatedSpecies: associatedSpeciesRef.current.value,
      pickupAddress: pickupAddressRef.current.value,
      originMatrix: originMatrixRef.current.value,
      leafs: leafsRef.current.value,
      plantingDate: plantingDateRef.current.value,
      donationDate: donationDateRef.current.value,
      shelf: shelfRef.current.value,
      observations: obsRef.current.value,
      pestRecord: pestRecord,
      fertRecord: fertRecord
      //imagemMatriz: imgRef.current && imgRef.current.length > 10 ? imgRef.current : loadImg
    };
    if (state) {
      console.log('updating database');
      submitObj.id = state;
      updateRecord(submitObj);
    } else {
      submitToDatabase(submitObj);
    }
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
        startRef.current.scrollIntoView({ block: 'start' });
        navigate('/cadastro', {
          state: null
        });
        location.reload(true);
      })
      .catch((rejection) => {
        console.log(rejection);
        alert(rejection);
      });
  };

  const updateRecord = (plantObj) => {
    fetch('arvoreMatriz/update', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(plantObj)
    })
      .then((response) => {
        console.log('object submit');
        startRef.current.scrollIntoView({ block: 'start' });
        navigate('/cadastro', {
          state: null
        });
        location.reload(true);
      })
      .catch((rejection) => {
        console.log(rejection);
        alert(rejection);
      });
  };

  if (state && (species === null || plant === null)) return <p>loading...</p>;

  return (
    <Styled.pageStyle>
      <Section background={true} forwardRef={startRef}>
        <Container>
          <PageTitle>{`Cadastro de ${stageName}`}</PageTitle>
          <ImgLoader idImg={state} key={imgKey} forwardedRef={imgRef} />

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
              <InputFText forwardedRef={densityRef} fieldW={22} type="number" />
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
                  forwardedRef={heightRef}
                  fieldW={22}
                  type="number"
                  placeholder="XX.XX"
                />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[0]}>
              <label>altura do fuste</label>
              <Styled.inputWrapper2 suffix="metros">
                <InputFText forwardedRef={shaftRef} fieldW={22} type="number" placeholder="XX.XX" />
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
              <InputFText forwardedRef={trunkFormationRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>formação da copa</label>
              <InputFText forwardedRef={cupFormationRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de solo</label>
              <InputFText forwardedRef={soilTypeRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>espécie</label>
              <Styled.selectInput ref={especieRef} fieldW={46}>
                {species.map((specie, index) => {
                  return (
                    <option key={index} value={specie}>
                      {specie.name}
                    </option>
                  );
                })}
              </Styled.selectInput>
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>tipo de vegetação</label>
              <InputFText forwardedRef={vegetationRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>município</label>
              <InputFText forwardedRef={cityRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>nome do determinador</label>
              <InputFText forwardedRef={determiningRef} fieldW={46} type="text" />
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
              <InputFText forwardedRef={instDetRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="5" visible={inputGroup[0]}>
              <label>outras espécies associadas</label>
              <InputFText forwardedRef={associatedSpeciesRef} fieldW={46} type="text" />
            </Styled.gridCell>
            <Styled.gridCellUp cStart="1" cEnd="3" visible={inputGroup[0]}>
              <label>área de coleta</label>
              <InputFText forwardedRef={pickupAddressRef} fieldW={46} type="text" />
            </Styled.gridCellUp>

            {/* Seedling inputs */}
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[3]}>
              <label>id da matriz de origem</label>
              <InputFText
                forwardedRef={originMatrixRef}
                fieldW={22}
                type="number"
                placeholder="XX.XX"
              />
            </Styled.gridCell>
            <Styled.gridCell cStart="2" cEnd="3" visible={inputGroup[1]}>
              <label>número de folhas</label>
              <Styled.inputWrapper2 suffix="unidades">
                <InputFText forwardedRef={leafsRef} fieldW={22} type="number" placeholder="XX.XX" />
              </Styled.inputWrapper2>
            </Styled.gridCell>
            <Styled.gridCell cStart="3" cEnd="4" visible={inputGroup[3]}>
              <label>data de plantio</label>
              <InputFText forwardedRef={plantingDateRef} fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="4" cEnd="5" visible={inputGroup[3]}>
              <label>data de doação</label>
              <InputFText forwardedRef={donationDateRef} fieldW={22} type="date" />
            </Styled.gridCell>
            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[3]}>
              <label>registro de pragas e doenças</label>
              <PestRecord
                key={pestKey}
                recordsIn={pestRecord}
                forwardedRef={pestRecordRef}
                descriptionRef={pestDescriptionRef}
                dateRef={pestDateRef}
              />
            </Styled.gridCell>

            <Styled.gridCell cStart="1" cEnd="5" visible={inputGroup[3]}>
              <label>registro de adubação</label>
              <FertilizationRecord
                key={fertKey}
                recordsIn={fertRecord}
                forwardedRef={fertRecordRef}
                descriptionRef={fertDescriptionRef}
                amountRef={fertAmountRef}
                dateRef={fertDateRef}
              />
            </Styled.gridCell>

            <Styled.gridCellUp cStart="1" cEnd="2" visible={inputGroup[3]}>
              <label>bancada</label>
              <InputFText forwardedRef={shelfRef} fieldW={22} type="number" />
            </Styled.gridCellUp>

            {/* Observations and registration*/}
            <Styled.gridCell cStart="3" cEnd="5" visible={true}>
              <label>observações</label>
              <Styled.textAreaStyle ref={obsRef} rows="5" cols="60" />
            </Styled.gridCell>

            <Styled.gridCell cStart="2" cEnd="4" visible={true}>
              <SubmitBtn onClick={handleSubmit}>{state ? 'atualizar' : 'cadastrar'}</SubmitBtn>
            </Styled.gridCell>
          </Styled.gridFourColumns>
        </Container>
      </Section>
    </Styled.pageStyle>
  );
};

export default RegistrationForm;
