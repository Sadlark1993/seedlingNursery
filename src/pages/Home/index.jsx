import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { useRef } from 'react';
import { login, register } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

function Home() {
  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  console.log(location.hostname + ':8080');
  const handleLogin = async () => {
    const cred = { username: userRef.current.value, password: passRef.current.value };
    const response = await login(cred);
    if (response != 200) {
      window.alert('Credenciais incorretas');
      passRef.current.value = '';
      return false;
    }

    window.location.href = '/acervo';
  };

  return (
    <Styled.pageStyle>
      <Section background={true}>
        <Container>
          <WelcomeTitle>Bem Vindo!</WelcomeTitle>
          <InputFText
            fieldW={36}
            visible={true}
            placeholder="usuário"
            type="text"
            forwardedRef={userRef}
          />
          <InputFText
            fieldW={36}
            visible={true}
            placeholder="senha"
            type="password"
            forwardedRef={passRef}
          />
          <SubmitBtn onClick={handleLogin}>Login</SubmitBtn>
          <span>*você precisa estar logado para acessar os dados do viveiro</span>
        </Container>
      </Section>
    </Styled.pageStyle>
  );
}

export default Home;
