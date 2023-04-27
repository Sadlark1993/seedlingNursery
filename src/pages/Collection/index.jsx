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
import datasMock from '../../components/PlantsBySpecie/datasMock';
import { Footer } from '../../components/Footer';

const logoImg = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const handleLast = () => {
  console.log('last');
};

const handleBack = () => {
  console.log('back');
};

const handleNext = () => {
  console.log('next');
};

const handleFirst = () => {
  console.log('first');
};

const Collection = () => {
  const [species, setSpecies] = useState([]);
  const [selected, setSelected] = useState(15);

  const descriptionRef = useRef();

  //loads the list of species to display at speciesCards
  useEffect(() => {
    (async () => {
      const speciesPromise = await fetch('./mocks/species.json');
      const speciesObj = await speciesPromise.json();
      setSpecies(speciesObj);
      //console.log(speciesObj[1].description);
    })();
  }, []);

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
          <h3 style={{ margin: '0 auto', textAlign: 'center' }}>Nenhuma espécie selecionada</h3>
        )}
      </Section>
      <Section background={true}>
        <PlantsBySpecie
          datas={datasMock}
          handleFirst={handleFirst}
          handleBack={handleBack}
          handleNext={handleNext}
          handleLast={handleLast}
          page={1}
        />
      </Section>
      <Footer>
        {
          'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
        }
      </Footer>
    </Styled.pageStyle>
  );
};

export default Collection;
