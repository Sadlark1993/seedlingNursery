import PropTypes from 'prop-types';

import * as Styled from './styles';
import { SubmitBtn } from '../SubmitBtn';
import { Container } from '../Container';
import { CardImage } from '../CardImage';
import { useState } from 'react';

/* const handleClick = () => {
  console.log("Wow, I'm gonna load some plants!!");
}; */

export const SpecieDesc = ({ specie, handleSearch }) => {
  //const [state, setState] = useState(specie);
  /*   const srcImg = URL.createObjectURL(`{"${imagem}"}`); */
  return (
    specie.id && (
      <Container>
        <Styled.sectionStyle>
          <Styled.containerStyle>
            <CardImage id={specie.id} alt={specie.name} />
            <Styled.contentContainer>
              <Styled.sepRectangle />
              <Styled.nameWrapper>
                <Styled.name>{specie.name}</Styled.name>
              </Styled.nameWrapper>
              <Styled.scienNameWrapper>
                <span>{specie.scienName}</span>
              </Styled.scienNameWrapper>
              <Styled.sepRectangle />
              <Styled.description>{specie.description}</Styled.description>
            </Styled.contentContainer>
          </Styled.containerStyle>
          <SubmitBtn onClick={() => handleSearch(specie.id)}>Carregar Plantas</SubmitBtn>
          <Styled.hintText>
            Clique aqui para ver as mudas, sementes e matrizes dessa espécie cadastradas no sistema
          </Styled.hintText>
          <Styled.fullSeparator />
        </Styled.sectionStyle>
      </Container>
    )
  );
};

SpecieDesc.propTypes = {
  specie: PropTypes.object.isRequired,
  handleSearch: PropTypes.func
};
