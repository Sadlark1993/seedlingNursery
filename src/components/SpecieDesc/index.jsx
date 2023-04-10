import PropTypes from 'prop-types';

import * as Styled from './styles';
import { SubmitBtn } from '../SubmitBtn';
import { Container } from '../Container';

const handleClick = () => {
  console.log("Wow, I'm gonna load some plants!!");
};

export const SpecieDesc = ({ srcImg, name, scienName, description }) => {
  return (
    <Container>
      <Styled.sectionStyle>
        <Styled.containerStyle>
          <Styled.imageStyle src={srcImg} />
          <Styled.contentContainer>
            <Styled.sepRectangle />
            <Styled.nameWrapper>
              <Styled.name>{name}</Styled.name>
            </Styled.nameWrapper>
            <Styled.scienNameWrapper>
              <span>{scienName}</span>
            </Styled.scienNameWrapper>
            <Styled.sepRectangle />
            <Styled.description>{description}</Styled.description>
          </Styled.contentContainer>
        </Styled.containerStyle>
        <SubmitBtn onClick={handleClick}>Carregar Plantas</SubmitBtn>
        <Styled.hintText>
          Clique aqui para ver as mudas, sementes e matrizes dessa espécie cadastradas no sistema
        </Styled.hintText>
      </Styled.sectionStyle>
    </Container>
  );
};

SpecieDesc.propTypes = {
  srcImg: PropTypes.string,
  name: PropTypes.string.isRequired,
  scienName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
