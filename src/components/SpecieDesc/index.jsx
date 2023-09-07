import PropTypes from 'prop-types';

import * as Styled from './styles';
import { SubmitBtn } from '../SubmitBtn';
import { Container } from '../Container';

/* const handleClick = () => {
  console.log("Wow, I'm gonna load some plants!!");
}; */

export const SpecieDesc = ({ imagem, nomeComum, nomeCientifico, descricao, handleSearch }) => {
  /*   const srcImg = URL.createObjectURL(`{"${imagem}"}`); */
  return (
    <Container>
      <Styled.sectionStyle>
        <Styled.containerStyle>
          <Styled.imageStyle src={`data:image/png;base64,${imagem}`} />
          <Styled.contentContainer>
            <Styled.sepRectangle />
            <Styled.nameWrapper>
              <Styled.name>{nomeComum}</Styled.name>
            </Styled.nameWrapper>
            <Styled.scienNameWrapper>
              <span>{nomeCientifico}</span>
            </Styled.scienNameWrapper>
            <Styled.sepRectangle />
            <Styled.description>{descricao}</Styled.description>
          </Styled.contentContainer>
        </Styled.containerStyle>
        <SubmitBtn onClick={() => handleSearch(nomeComum)}>Carregar Plantas</SubmitBtn>
        <Styled.hintText>
          Clique aqui para ver as mudas, sementes e matrizes dessa espécie cadastradas no sistema
        </Styled.hintText>
        <Styled.fullSeparator />
      </Styled.sectionStyle>
    </Container>
  );
};

SpecieDesc.propTypes = {
  imagem: PropTypes.string,
  nomeComum: PropTypes.string.isRequired,
  nomeCientifico: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  handleSearch: PropTypes.func
};
