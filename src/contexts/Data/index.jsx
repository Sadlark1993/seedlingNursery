import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export const Data = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    (async () => {
      const plantsPromise = await fetch('./mocks/plants.json');
      const plantsObj = await plantsPromise.json();
      setPlants(plantsObj);
    })();

    (async () => {
      const speciesPromise = await fetch('./mocks/species.json');
      const speciesObj = await speciesPromise.json();
      setSpecies(speciesObj);
    })();
  }, []);

  return <DataContext.Provider value={{ plants, species }}>{children}</DataContext.Provider>;
};

Data.propTypes = {
  children: PropTypes.node
};
