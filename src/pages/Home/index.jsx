import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import Links from '../../components/Header/LinksMock';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { Footer } from '../../components/Footer';

const img = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

function Home() {
  const handleLogin = () => {
    console.log('clicked');
  };

  return (
    <Styled.pageStyle>
      <Header>
        {[<Logo key="logo" img={img} />, <Navigation key="navigation" links={Links} />]}
      </Header>
      <Section background={true}>
        <Container>
          <WelcomeTitle>Bem Vindo!</WelcomeTitle>
          <form>
            <InputFText fieldW={36} visible={true} placeHolder="email" type="email" />
            <InputFText fieldW={36} visible={true} placeHolder="password" type="password" />
            <SubmitBtn onClick={handleLogin}>Login</SubmitBtn>
            <span>*você precisa estar logado para acessar os dados do viveiro</span>
          </form>
        </Container>
      </Section>
      <Footer>
        {
          'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 - Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
        }
      </Footer>
    </Styled.pageStyle>
  );
}

export default Home;
