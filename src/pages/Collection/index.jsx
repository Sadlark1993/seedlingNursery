import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import Links from '../../components/Header/LinksMock';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { CardContainer } from '../../components/CardContainer';
import cardsMock from '../../components/CardContainer/cardsMock';
import { PageTitle } from '../../components/PageTitle';
import { ContentNavigation } from '../../components/ContentNavigation';
import { SpecieDesc } from '../../components/SpecieDesc';
import specieDescMock from './specieDescMock';
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
          <CardContainer cards={cardsMock} />
          <ContentNavigation
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            page={1}
          />
        </Container>
      </Section>
      <Section background={false}>
        <SpecieDesc {...specieDescMock} />
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
