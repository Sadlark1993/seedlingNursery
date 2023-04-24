import { useState } from 'react';

import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import Links from '../../components/Header/LinksMock';
import { Navigation } from '../../components/Navigation';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ShelvesList } from '../../components/ShelvesList';
import shelvesMock from './mocks/shelvesMock';
import { PlantsByShelf } from '../../components/PlantsByShelf';
import plantsMock from './mocks/plantsMock';
import { Footer } from '../../components/Footer';

const img = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const Shelves = () => {
  const [shelfId, setShelfId] = useState(1);

  const handleShelfClick = (id) => {
    setShelfId(id);
    console.log('shelf id: ', id);
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

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={img} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>Bancadas</PageTitle>
          <ShelvesList shelvesList={shelvesMock} onClick={handleShelfClick} />
        </Container>
      </Section>
      <Section background={true}>
        <Container>
          <PageTitle>{`Bancada ${shelfId}`}</PageTitle>
          <PlantsByShelf
            datas={plantsMock}
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={1}
          />
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
