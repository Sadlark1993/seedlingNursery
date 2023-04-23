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

const img = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

const Shelves = () => {
  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={img} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <PageTitle>Bancadas</PageTitle>
          <ShelvesList shelvesList={shelvesMock} />
        </Container>
      </Section>
    </Styled.pageStyle>
  );
};

export default Shelves;
