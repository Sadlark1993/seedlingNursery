import { useContext, useEffect, useRef, useState } from 'react';

import { DataContext } from '../../contexts/Data';

import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import Links from '../../components/Header/LinksMock';
import { Navigation } from '../../components/Navigation';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ShelvesList } from '../../components/ShelvesList';
import { PlantsByShelf } from '../../components/PlantsByShelf';
import { Footer } from '../../components/Footer';

const img = {
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

const Shelves = () => {
  const { plants } = useContext(DataContext);
  const [shelfId, setShelfId] = useState(1);
  //amount of seeds/seedlings in each shelf
  const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //list of species in each shelf
  const [species, setSpecies] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [plantsByShelf, setPlantsByShelf] = useState([]);

  const plantsListRef = useRef();

  useEffect(() => {
    const plantCount = count;
    const shelfSpecies = species;
    plants.forEach((plant) => {
      const plantShelf = +plant.observacoes.split(';')[5];
      if (plantShelf) {
        ++plantCount[plantShelf - 1];
        const matrix = plants.find((matrix) => +matrix.id === +plant.observacoes.split(';')[8]);

        //if it does't have the specie name AND it does't have more than 4 specie names, concat a specie name
        if (
          matrix &&
          !shelfSpecies[plantShelf - 1].includes(matrix.nomeComum) &&
          (shelfSpecies[plantShelf - 1].match(/,/g) || []).length < 3
        ) {
          shelfSpecies[plantShelf - 1] +=
            shelfSpecies[plantShelf - 1] === '' ? `${matrix.nomeComum}` : `, ${matrix.nomeComum}`;
        }
      }
    });
    setCount([...plantCount]);
    setSpecies([...shelfSpecies]);
    //console.log('bancada', count, species);
  }, [plants]);

  useEffect(() => {
    const selectedPlants = plants.filter((plant) => {
      const plantShelf = +plant.observacoes.split(';')[5];
      return plantShelf === +shelfId;
    });
    setPlantsByShelf(selectedPlants);
  }, [shelfId, plants]);

  const handleShelfClick = (id) => {
    setShelfId(id);
    plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={img} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>Bancadas</PageTitle>
          <ShelvesList countList={count} speciesList={species} onClick={handleShelfClick} />
        </Container>
      </Section>
      <Section background={true} forwardRef={plantsListRef}>
        <Container>
          <PageTitle>{`Bancada ${shelfId}`}</PageTitle>
          {plantsByShelf.length ? (
            <PlantsByShelf
              datas={plantsByShelf}
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              page={1}
            />
          ) : (
            <h3 style={{ textAlign: 'center' }}>{`A bancada ${shelfId} está vazia.`}</h3>
          )}
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

export default Shelves;
