import { useEffect, useRef, useState } from 'react';

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
  const [species, setSpecies] = useState([]);
  const [selected, setSelected] = useState(0);
  const [plantsList, setPlantsList] = useState([]);
  const [plantsOnDisplay, setPlantsOnDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const descriptionRef = useRef();
  const plantsListRef = useRef();

  const rowsPerPage = 10; //the number here will be 20. I've put a smaller number just to test.

  //loads the list of species to display at speciesCards
  useEffect(() => {
    (async () => {
      const speciesPromise = await fetch('./mocks/species.json');
      const speciesObj = await speciesPromise.json();
      setSpecies(speciesObj);
      //console.log(speciesObj[1].description);
    })();
  }, []);

  //scrolls into the list of plants when a new list is load.
  useEffect(() => {
    if (plantsList.length)
      plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [plantsList]);

  //select page
  useEffect(() => {
    setPlantsOnDisplay(
      plantsList.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    );
  }, [currentPage, rowsPerPage, plantsList]);

  //selects the specie
  const handleCardClick = (id) => {
    setSelected(id - 1);
    descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //list the plants that belong to the selected specie.
  const handleLoadPlantsBySpecie = async (name) => {
    console.log(`loading ${name}.`);
    const plantsJson = await fetch('./mocks/plants.json');
    const plantsObj = await plantsJson.json();
    const selectedPlants = await plantsObj.filter((plant) => {
      if (plant.stage === 0) {
        return plant.specie === name;
      }
      const sourceMatrix = plantsObj.find((matrix) => matrix.id === plant.matrix);
      return sourceMatrix.specie === name;
    });
    console.log(selectedPlants);
    setPlantsList(selectedPlants);
  };

  //Plants list navigation
  const handleNextPlants = () => {
    if (plantsList[currentPage * rowsPerPage]) setCurrentPage((c) => ++c);
    else console.log(`does't have next`);
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
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={1}
          />
          <CardContainer cards={species} handleClick={handleCardClick} />
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={1}
          />
        </Container>
      </Section>
      <Section background={false} forwardRef={descriptionRef}>
        {species[selected] ? (
          <SpecieDesc {...species[selected]} handleSearch={handleLoadPlantsBySpecie} />
        ) : (
          <h3 style={{ margin: '0 auto', textAlign: 'center' }}>nenhuma espécie selecionada</h3>
        )}
      </Section>
      {/* MAKE THIS DESAPEAR!!!!! */}
      {plantsList.length && (
        <Section className="start" background={true} forwardRef={plantsListRef}>
          <PlantsBySpecie
            datas={plantsOnDisplay}
            handleFirst={handleFirstPlants}
            handleBack={handlePreviousPlants}
            handleNext={handleNextPlants}
            handleLast={handleLastPlants}
            page={currentPage}
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
