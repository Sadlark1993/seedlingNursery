import PropTypes from 'prop-types';
import * as Styled from './styles';

import { getSpecieImage } from '../../api/speciesApi';
import { CardImage } from '../CardImage';

export const CardContainer = ({ cards, handleClick = () => console.log('clicked') }) => {
  return (
    <Styled.containerStyle>
      {cards.map((card) => {
        return (
          <Styled.cardStyle key={card.id} onClick={() => handleClick(card.id)}>
            <CardImage id={card.id} alt={card.name} />
            <Styled.nameWrapper>
              <h3>{card.name}</h3>
            </Styled.nameWrapper>
            <Styled.scienWrapper>
              <span>{card.scienName}</span>
            </Styled.scienWrapper>
          </Styled.cardStyle>
        );
      })}
      <Styled.cardStyle key="cadastro" onClick={() => handleClick(null)}>
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
