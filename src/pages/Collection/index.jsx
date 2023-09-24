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
  const [speciesList, setSpeciesList] = useState([]);

  const [speciesPage, setSpeciesPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  //defines the color (disabled or enabled) of the navigation buttons
  //put this (above) inside the component!!

  const [showSeedlings, setShowSeedlings] = useState(true);
  const [showSeeds, setShowSeeds] = useState(true);
  const [showMatrixes, setShowMatrixes] = useState(true);

  const descriptionRef = useRef();
  const plantsListRef = useRef();

  const speciesPerPage = 7; //number of species cards per page - 1 (because of the register card)
  const rowsPerPage = 20; //the number here will be 20. I've put a smaller number just to test.

  useEffect(() => {}, []);

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
