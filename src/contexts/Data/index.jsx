import { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const Data = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [species, setSpecies] = useState([]);

  /*   useEffect(() => {
    (async () => {
      const speciesPromise = await fetch('especie/find/all');
      const speciesObj = await speciesPromise.json();
      setSpecies(await speciesObj);

      const plantsPromise = await fetch('arvoreMatriz/find/all');
      const plantsObj = await plantsPromise.json();
      setPlants(plantsObj);
    })();
  }, []); */

  return <DataContext.Provider value={{ plants, species }}>{children}</DataContext.Provider>;
};

const getPlantas = async () => {
  console.log('');
  /* 
  nomeComum =
  0: estagio [num]
  1: especie [num]
  2: numero de folhas [num]
  3: dataPlantio [date]
  4: data de doacao [date]
  5: bancada [num]
  6: inst. determinador [string]
  7: endereco [string]
  8: matrizOrigem
  9: observacoes
  10: adubacao
  11: doenças
  12: imagem
 */
  /* const obs = await plantsObj.observacoesCrescimento.split(';');

  const plantsReady = await {
    ...plantsObj,
    estagio: obs[0],
    especie: obs[1],
    numFolhas: obs[2],
    dataPlantio: obs[3],
    dataDoacao: obs[4],
    bancada: obs[5],
    instDeterminador: obs[6],
    endereco: obs[7],
    matrizOrigem: obs[8],
    observacoes: obs[9],
    adubacao: obs[10],
    doencas: obs[11]
  };
  return plantsReady;
  */
};

Data.propTypes = {
  children: PropTypes.node
};
