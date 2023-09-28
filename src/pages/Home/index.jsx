import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { Footer } from '../../components/Footer';

function Home() {
  const handleLogin = () => {
    console.log('clicked');
  };

  return (
    <Styled.pageStyle>
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
    </Styled.pageStyle>
  );
}

export default Home;
