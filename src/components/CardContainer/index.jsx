import PropTypes from 'prop-types';
import * as Styled from './styles';
import { v4 as uuidv4 } from 'uuid';

/* The array cards must have objects that will have:
  -id : number;
  -srcImg : string;
  -name : string;
  -scientificName : string;
*/

export const CardContainer = ({ cards, handleClick = () => console.log('clicked') }) => {
  return (
    <Styled.containerStyle>
      {cards.map((card, index) => {
        return (
          <Styled.cardStyle key={uuidv4()} onClick={() => handleClick(index)}>
            <img src={`data:image/png;base64,${card.imagem}`} alt={card.nomeComum} />
            <Styled.nameWrapper>
              <h3>{card.nomeComum}</h3>
            </Styled.nameWrapper>
            <Styled.scienWrapper>
              <span>{card.nomeCientifico}</span>
            </Styled.scienWrapper>
          </Styled.cardStyle>
        );
      })}
      <Styled.cardStyle key="cadastro" onClick={() => handleClick('cadastro')}>
        <img src="./img/default/addSpecie.png" alt="add" />
        <Styled.nameWrapper>
          <h3>Cadastrar Nova Espécie</h3>
        </Styled.nameWrapper>
        <Styled.scienWrapper>
          <span></span>
        </Styled.scienWrapper>
      </Styled.cardStyle>
    </Styled.containerStyle>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleClick: PropTypes.func
};
