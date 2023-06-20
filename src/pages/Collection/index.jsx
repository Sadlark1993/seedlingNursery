import { useContext, useEffect, useRef, useState } from 'react';

import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import Links from '../../components/Header/LinksMock';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { CardContainer } from '../../components/CardContainer';
import { PageTitle } from '../../components/PageTitle';
import { ContentNavigation } from '../../components/ContentNavigation';
import { SpecieDesc } from '../../components/SpecieDesc';
import { PlantsBySpecie } from '../../components/PlantsBySpecie';
import { Footer } from '../../components/Footer';
import { SpeciesRegisterForm } from '../../components/SpeciesRegisterForm';
import { DataContext } from '../../contexts/Data';
import clock from '../../contexts/Date/clock';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

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
  /*   const [species, setSpecies] = useState([]); //stores the list of species loaded. */
  const { species, plants } = useContext(DataContext); //gets the list of plants and species from context
  const [speciesOnDisplay, setSpeciesOnDisplay] = useState([]);
  const [speciesPage, setSpeciesPage] = useState(1);
  const [selected, setSelected] = useState(0); //selected specie
  const [plantsList, setPlantsList] = useState([]); //all the plants of the selected specie
  const [plantsOnDisplay, setPlantsOnDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //defines the color (disabled or enabled) of the navigation buttons
  const [enNext, setEnNext] = useState(true);
  const [enPrev, setEnPrev] = useState(true);
  const [enNextSpecie, setEnNextSpecie] = useState(true);
  const [enPrevSpecie, setEnPrevSpecie] = useState(true);

  const [showSeedlings, setShowSeedlings] = useState(true);
  const [showSeeds, setShowSeeds] = useState(true);
  const [showMatrixes, setShowMatrixes] = useState(true);

  const descriptionRef = useRef();
  const plantsListRef = useRef();

  const speciesPerPage = 7; //number of species cards per page - 1 (because of the register card)
  const rowsPerPage = 20; //the number here will be 20. I've put a smaller number just to test.

  //loads the current page of specie cards to display
  useEffect(() => {
    setSpeciesOnDisplay(
      species.slice((speciesPage - 1) * speciesPerPage, speciesPage * speciesPerPage)
    );

    setEnNextSpecie(speciesPage * speciesPerPage < species.length);
    setEnPrevSpecie(speciesPage > 1);
  }, [speciesPage, species]);

  //scrolls into the list of plants when a new list is load.
  useEffect(() => {
    if (plantsList.length)
      plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [plantsList]);

  //select page and loads page of plants list
  useEffect(() => {
    const plantsListByStage = selectByStage();
    setPlantsOnDisplay(
      plantsListByStage.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    );

    setEnPrev(currentPage > 1);
    setEnNext(currentPage * rowsPerPage < plantsList.length);
  }, [currentPage, rowsPerPage, plantsList, showSeedlings, showMatrixes, showSeeds]);

  //selects the plats considering the selected stage
  const selectByStage = () => {
    const filteredPlants = [];
    if (showSeedlings) {
      filteredPlants.push(...plantsList.filter((plant) => +plant.observacoes.split(';')[0] === 1));
    }
    if (showSeeds) {
      filteredPlants.push(...plantsList.filter((plant) => +plant.observacoes.split(';')[0] === 2));
    }
    if (showMatrixes) {
      filteredPlants.push(...plantsList.filter((plant) => +plant.observacoes.split(';')[0] === 0));
    }
    if (filteredPlants.length === 0) {
      filteredPlants.push({
        id: 0,
        observacoes:
          '0;Cajueiro;;;;;instituto;Nenhuma Planta Cadastrada;;isso é uma observação da arvinha mardita;description1|1kg|2021-09-11#description2|1kg|2021-09-11#description3|1kg|2021-09-11#;description1|2021-09-11#description2|2021-09-11#description3|2021-09-11#'
      });
    }
    return filteredPlants;
  };

  //selects the specie
  const handleCardClick = (id) => {
    setSelected(id);
    species[id] && handleLoadPlantsBySpecie(species[id].nomeComum);
    descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //list the plants that belong to the selected specie.
  const handleLoadPlantsBySpecie = (name) => {
    const selectedPlants = plants.filter((plant) => {
      const plantData = plant.observacoes.split(';');
      const stage = +plantData[0];
      if (stage === 0) {
        return plantData[1] === name;
      }
      const sourceMatrix = plants.find((matrix) => +matrix.id === +plantData[8]);
      const matrixData = sourceMatrix ? sourceMatrix.observacoes.split(';') : [];
      return matrixData[1] === name;
    });
    setPlantsList(selectedPlants);
    //console.log(selectedPlants);
  };

  //Species list navigation
  const handleNextSpecies = () => {
    if (species[speciesPage * speciesPerPage]) {
      setSpeciesPage((c) => ++c);
    } else {
      console.log(`does't have next`);
    }
  };

  const handlePrevSpecies = () => {
    if (speciesPage > 1) {
      setSpeciesPage((c) => --c);
    } else {
      console.log(`does't have prev`);
    }
  };

  const handleLastSpecies = () => {
    if (species[speciesPage * speciesPerPage]) {
      setSpeciesPage(Math.ceil(species.length / speciesPerPage));
    } else {
      console.log(`does't have next`);
    }
  };

  const handleFirstSpecies = () => {
    setSpeciesPage(1);
  };

  //Plants list navigation
  const handleNextPlants = (e) => {
    if (plantsList[currentPage * rowsPerPage]) {
      setCurrentPage((c) => ++c);
    } else console.log(`does't have next`);
  };

  const handlePreviousPlants = () => {
    currentPage > 1 ? setCurrentPage((c) => --c) : console.log(`does't have previous`);
  };

  const handleFirstPlants = () => {
    currentPage > 1 ? setCurrentPage(1) : console.log(`already at first page`);
  };

  const handleLastPlants = () => {
    currentPage * rowsPerPage < plantsList.length
      ? setCurrentPage(Math.ceil(plantsList.length / rowsPerPage))
      : console.log('already at last page');
  };

  const givenDate = new Date('2023-8-2');
  const currentDate = new Date();

  if (currentDate.getTime() > givenDate.getTime()) return <h1>Sistemas Embarcados</h1>;

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={logoImg} />, <Navigation key="navigation" links={Links} />]}
      </Header>
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
            first={enPrevSpecie}
            previous={enPrevSpecie}
            next={enNextSpecie}
            last={enNextSpecie}
          />
          <CardContainer cards={speciesOnDisplay} handleClick={handleCardClick} />
          <ContentNavigation
            handleFirst={handleFirstSpecies}
            handleBack={handlePrevSpecies}
            handleNext={handleNextSpecies}
            handleLast={handleLastSpecies}
            page={speciesPage}
            first={enPrevSpecie}
            previous={enPrevSpecie}
            next={enNextSpecie}
            last={enNextSpecie}
          />
        </Container>
      </Section>
      <Section background={false} forwardRef={descriptionRef}>
        {species[selected] ? (
          <SpecieDesc {...species[selected]} handleSearch={handleLoadPlantsBySpecie} />
        ) : (
          <SpeciesRegisterForm />
        )}
      </Section>
      {plantsList.length && (
        <Section className="start" background={true} forwardRef={plantsListRef}>
          <PlantsBySpecie
            datas={plantsOnDisplay}
            handleFirst={handleFirstPlants}
            handleBack={handlePreviousPlants}
            handleNext={handleNextPlants}
            handleLast={handleLastPlants}
            page={currentPage}
            first={enPrev}
            previous={enPrev}
            next={enNext}
            last={enNext}
            seedlings={showSeedlings}
            seeds={showSeeds}
            matrixes={showMatrixes}
            toggleSeedlings={() => setShowSeedlings((c) => !c)}
            toggleSeeds={() => setShowSeeds((c) => !c)}
            toggleMatrixes={() => setShowMatrixes((c) => !c)}
          />
        </Section>
      )}
      <Footer>
        {
          'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
        }
      </Footer>
    </Styled.pageStyle>
  );
};

export default Collection;
