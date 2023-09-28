import { useContext, useEffect, useRef, useState } from 'react';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { CardContainer } from '../../components/CardContainer';
import { PageTitle } from '../../components/PageTitle';
import { ContentNavigation } from '../../components/ContentNavigation';
import { SpecieDesc } from '../../components/SpecieDesc';
import { PlantsBySpecie } from '../../components/PlantsBySpecie';
import { Footer } from '../../components/Footer';
import { SpeciesRegisterForm } from '../../components/SpeciesRegisterForm';

import { getSpeciesList, getSpecie } from '../../api/speciesApi';
import { getPlantsBySpeciePage } from '../../api/plantsApi';

const handleLast = () => {
  console.log('last');
};

const handleNext = () => {
  console.log('last');
};

const handleBack = () => {
  console.log('back');
};

const handleFirst = () => {
  console.log('first');
};

const Collection = () => {
  //species
  const [speciesList, setSpeciesList] = useState([]);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [speciesPage, setSpeciesPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSpecie, setSelectedSpecie] = useState({});

  // enable/disable species navigation
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  //plants
  const [currentPage, setCurrentPage] = useState(1);
  const [showSeedlings, setShowSeedlings] = useState(1);
  const [showSeeds, setShowSeeds] = useState(1);
  const [showMatrixes, setShowMatrixes] = useState(1);
  const [plantsList, setPlantsList] = useState([]);
  const [plantsCount, setPlantsCount] = useState(0);

  // enable/disable plants navigation
  const [firstPlants, setFirstPlants] = useState(false);
  const [lastPlants, setLastPlants] = useState(false);

  const descriptionRef = useRef();
  const plantsListRef = useRef();

  const speciesPerPage = 7; //number of species cards per page - 1 (because of the register card)
  const rowsPerPage = 20; //the number here will be 20. I've put a smaller number just to test.

  useEffect(() => {
    (async () => {
      // get species list page
      const list = await getSpeciesList(speciesPage);
      setSpeciesList(list.list);
      setSpeciesCount(list.number);

      // enable/disable navigation buttons
      if (speciesPage <= 1) setFirst(false);
      else setFirst(true);

      if (speciesPage * speciesPerPage >= list.number) setLast(false);
      else setLast(true);
    })();
  }, [speciesPage]);

  //loads selected specie to SpecieDesc component
  useEffect(() => {
    if (selectedId) {
      (async () => {
        const specie = await getSpecie(selectedId);
        setSelectedSpecie(specie);
      })();
    }
  }, [selectedId]);

  // enable/disable plants navigation buttons
  useEffect(() => {
    if (selectedId)
      (async () => {
        const { list, number } = await getPlantsBySpeciePage(
          currentPage,
          rowsPerPage,
          selectedId,
          showMatrixes,
          showSeedlings,
          showSeeds
        );
        setPlantsList(list);
        setPlantsCount(number);

        if (currentPage <= 1) setFirstPlants(false);
        else setFirstPlants(true);

        if (currentPage * rowsPerPage >= number) setLastPlants(false);
        else setLastPlants(true);
      })();
  }, [currentPage, selectedId, showMatrixes, showSeedlings, showSeeds]);

  useEffect(() => {
    setCurrentPage(1);
  }, [showMatrixes, showSeedlings, showSeeds]);

  // change selected specie
  const handleCardClick = (id, ref) => {
    setSelectedId(id);
    descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //Species list navigation
  const handleNextSpecies = () => {
    setSpeciesPage((c) => ++c);
  };

  const handlePrevSpecies = () => {
    setSpeciesPage((c) => --c);
  };

  const handleLastSpecies = () => {
    setSpeciesPage(Math.ceil(speciesCount / speciesPerPage));
  };

  const handleFirstSpecies = () => {
    setSpeciesPage(1);
  };

  //load list of plants
  const handleSearch = async (specieId) => {
    setSelectedId(specieId);
    plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //Plants list navigation
  const handleNextPlants = (e) => {
    setCurrentPage((c) => ++c);
  };

  const handlePreviousPlants = () => {
    setCurrentPage((c) => --c);
  };

  const handleFirstPlants = () => {
    setCurrentPage(1);
  };

  const handleLastPlants = () => {
    setCurrentPage(Math.ceil(plantsCount / rowsPerPage));
  };

  return (
    <Styled.pageStyle>
      <Section background={true}>
        <Container>
          <PageTitle>Espécies Cadastradas</PageTitle>
          <ContentNavigation
            key="nav1"
            handleFirst={handleFirstSpecies}
            handleBack={handlePrevSpecies}
            handleNext={handleNextSpecies}
            handleLast={handleLastSpecies}
            page={speciesPage}
            first={first}
            previous={first}
            next={last}
            last={last}
          />
          <CardContainer cards={speciesList} handleClick={handleCardClick} />
          <ContentNavigation
            handleFirst={handleFirstSpecies}
            handleBack={handlePrevSpecies}
            handleNext={handleNextSpecies}
            handleLast={handleLastSpecies}
            page={speciesPage}
            first={true}
            previous={true}
            next={true}
            last={true}
          />
        </Container>
      </Section>
      <Section background={false} forwardRef={descriptionRef}>
        {selectedId ? (
          <SpecieDesc key={selectedSpecie} specie={selectedSpecie} handleSearch={handleSearch} />
        ) : (
          <SpeciesRegisterForm />
        )}
      </Section>
      <Section className="start" background={true} forwardRef={plantsListRef}>
        <PlantsBySpecie
          datas={plantsList}
          handleFirst={handleFirstPlants}
          handleBack={handlePreviousPlants}
          handleNext={handleNextPlants}
          handleLast={handleLastPlants}
          page={currentPage}
          first={firstPlants}
          previous={firstPlants}
          next={lastPlants}
          last={lastPlants}
          seedlings={showSeedlings}
          seeds={showSeeds}
          matrixes={showMatrixes}
          toggleSeedlings={() => {
            setShowSeedlings((c) => (c ? 0 : 1));
            console.log('seedlings');
          }}
          toggleSeeds={() => setShowSeeds((c) => (c ? 0 : 1))}
          toggleMatrixes={() => setShowMatrixes((c) => (c ? 0 : 1))}
        />
      </Section>
    </Styled.pageStyle>
  );
};

export default Collection;
