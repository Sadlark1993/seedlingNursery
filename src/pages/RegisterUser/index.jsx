import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { InputFText } from '../../components/InputFText';
import { SubmitBtn } from '../../components/SubmitBtn';
import { useRef } from 'react';
import { login, register } from '../../api/userApi';

function RegisterUser() {
  if (localStorage.getItem('authority') != 'ADMIN') {
    window.location.href = '/acervo';
  }

  const authorityRef = useRef();
  const userRef = useRef();
  const passRef = useRef();
  const pass2Ref = useRef();

  const handleLogin = async () => {
    console.log('user: ' + userRef.current.value);
    console.log('pass: ' + passRef.current.value);
    console.log('authority: ' + authorityRef.current.value);

    if (passRef.current.value !== pass2Ref.current.value) {
      window.alert('As senhas não conferem.');
      pass2Ref.current.value = '';
      passRef.current.value = '';
      return false;
    }

    const cred = { username: userRef.current.value, password: passRef.current.value };
    const response = await register(cred, authorityRef.current.value);

    pass2Ref.current.value = '';
    passRef.current.value = '';

    if (response == 401) {
      window.alert('Você não tem permissão para executar essa tarefa');
      return false;
    }

    if (response != 201) {
      window.alert('Não foi possível executar o cadastro');
      return false;
    }

    window.alert('Usuário cadastrado com sucesso');
  };

  return (
    <Styled.pageStyle>
      <Section background={true}>
        <Container>
          <WelcomeTitle>Registrar Novo Usuário</WelcomeTitle>
          <form autoComplete="new-password" autoCorrect="off" aria-keyshortcuts="off">
            <div className="select-wrapper">
              <select ref={authorityRef}>
                <option value={'USER'}>Usuario</option>
                <option value={'ADMIN'}>Administrador</option>
              </select>
            </div>
            <InputFText
              autoComplete="new-password"
              fieldW={36}
              visible={true}
              placeholder="novo usuário"
              type="text"
              forwardedRef={userRef}
            />
            <InputFText
              autoComplete="new-password"
              fieldW={36}
              visible={true}
              placeholder="nova Senha"
              type="password"
              forwardedRef={passRef}
            />
            <InputFText
              autoComplete="new-password"
              fieldW={36}
              visible={true}
              placeholder="repita a nova senha"
              type="password"
              forwardedRef={pass2Ref}
            />
          </form>
          <SubmitBtn onClick={handleLogin}>Login</SubmitBtn>
          <span>*você precisa estar logado para acessar os dados do viveiro</span>
        </Container>
      </Section>
    </Styled.pageStyle>
  );
}

export default RegisterUser;
