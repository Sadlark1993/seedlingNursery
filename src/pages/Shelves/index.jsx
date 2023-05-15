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
  const [plantsDisplay, setPlantsDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //enable of next and back buttons
  const [enPrev, setEnPrev] = useState(true);
  const [enNext, setEnNext] = useState(true);

  const plantsListRef = useRef();

  const rowsPerPage = 10;

  //populates shelves list
  useEffect(() => {
    const plantCount = count;
    const shelfSpecies = species;
    plants.forEach((plant) => {
      if (plant.shelf) {
        ++plantCount[plant.shelf - 1];
        const matrix = plants.find((matrix) => matrix.id === plant.matrix);

        //if it does't have the specie name AND it does't have more than 4 specie names, concat a specie name
        if (
          !shelfSpecies[plant.shelf - 1].includes(matrix.specie) &&
          (shelfSpecies[plant.shelf - 1].match(/,/g) || []).length < 3
        ) {
          shelfSpecies[plant.shelf - 1] +=
            shelfSpecies[plant.shelf - 1] === '' ? `${matrix.specie}` : `, ${matrix.specie}`;
        }
      }
    });
    setCount([...plantCount]);
    setSpecies([...shelfSpecies]);
  }, [plants]);

  //filter by shelf
  useEffect(() => {
    const selectedPlants = plants.filter((plant) => plant.shelf === shelfId);
    setPlantsByShelf(selectedPlants);
  }, [shelfId, plants]);

  //limits the number of plants to show per page
  useEffect(() => {
    setPlantsDisplay(
      plantsByShelf.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
    );
    setEnPrev(currentPage > 0);
    setEnNext((currentPage + 1) * rowsPerPage < plantsByShelf.length);
  }, [plantsByShelf, currentPage]);

  const handleShelfClick = (id) => {
    setShelfId(id);
    plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //page navigation events:
  const handleNext = () => {
    currentPage * rowsPerPage < plantsByShelf.length / rowsPerPage
      ? setCurrentPage((c) => ++c)
      : '';
  };

  const handleLast = () => {
    currentPage * rowsPerPage < plantsByShelf.length
      ? setCurrentPage(Math.ceil(plantsByShelf.length / rowsPerPage - 1))
      : '';
  };

  const handleBack = () => {
    currentPage + 1 > 1 ? setCurrentPage((c) => --c) : '';
  };

  const handleFirst = () => {
    currentPage > 0 ? setCurrentPage(0) : '';
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
      <Section style={{ alignContent: 'start' }} background={true} forwardRef={plantsListRef}>
        <Container>
          <PageTitle>{`Bancada ${shelfId}`}</PageTitle>
          {plantsByShelf.length ? (
            <PlantsByShelf
              datas={plantsDisplay}
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              next={enNext}
              previous={enPrev}
              page={currentPage + 1}
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
