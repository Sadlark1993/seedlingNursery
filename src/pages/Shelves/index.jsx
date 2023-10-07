import { useContext, useEffect, useRef, useState } from 'react';

import { DataContext } from '../../contexts/Data';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ShelvesList } from '../../components/ShelvesList';
import { PlantsByShelf } from '../../components/PlantsByShelf';
import { getCountByShelf, getPlantsByShelf } from '../../api/plantsApi';
const nulo = false;

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
  const [plants, setPlants] = useState(null);
  const [shelfId, setShelfId] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [countPerShelf, setCountPerShelf] = useState(null);

  // enable/disable plants list navigation
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  const plantsListRef = useRef();

  const rowsPerPage = 5;

  useEffect(() => {
    (async () => {
      const count = await getCountByShelf();
      setCountPerShelf(await count);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const obj = await getPlantsByShelf(shelfId, pageIndex, rowsPerPage);
      setPlants(await obj);

      if (pageIndex <= 0) setFirst(false);
      else setFirst(true);

      if (countPerShelf && (pageIndex + 1) * rowsPerPage >= countPerShelf[shelfId - 1])
        setLast(false);
      else setLast(true);
    })();
  }, [shelfId, pageIndex]);

  const handleShelfClick = (id) => {
    setShelfId(id);
    setPageIndex(0);
    plantsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // plants navigation functions
  const handleFirst = () => {
    setPageIndex(0);
  };

  const handleBack = () => {
    setPageIndex((c) => --c);
  };

  const handleNext = () => {
    setPageIndex((c) => ++c);
  };

  const handleLast = () => {
    setPageIndex(Math.floor(countPerShelf[shelfId - 1] / rowsPerPage));
  };

  if (!countPerShelf || !plants) return <h2>Loading...</h2>;

  return (
    <Styled.pageStyle>
      <Section background={true}>
        <Container>
          <PageTitle>Bancadas</PageTitle>
          <ShelvesList countList={countPerShelf} speciesList={[]} onClick={handleShelfClick} />
        </Container>
      </Section>
      <Section background={true} forwardRef={plantsListRef} style={{ alignContent: 'start' }}>
        <Container>
          <PageTitle>{`Bancada ${shelfId}`}</PageTitle>
          {plants ? (
            <PlantsByShelf
              datas={plants}
              handleFirst={handleFirst}
              handleBack={handleBack}
              handleNext={handleNext}
              handleLast={handleLast}
              first={first}
              previous={first}
              next={last}
              last={last}
              page={pageIndex + 1}
            />
          ) : (
            <h3 style={{ textAlign: 'center' }}>{`Carregando...`}</h3>
          )}
        </Container>
      </Section>
    </Styled.pageStyle>
  );
};

export default Shelves;
