import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { ValvesList } from '../../components/ValvesList';

const handleFirst = () => {
  console.log('first');
};
const handleBack = () => {
  console.log('back');
};
const handleNext = () => {
  console.log('next');
};
const handleLast = () => {
  console.log('last');
};

export const DashBoard = () => {
  return (
    <Styled.compStyle>
      <Section background={false}>
        <Container>
          <PageTitle>Dashboard</PageTitle>
          <Styled.selector>
            <button>Válvulas</button>
            <button>Sensores</button>
          </Styled.selector>
          <ValvesList
            handleFirst={handleFirst}
            handleBack={handleBack}
            handleNext={handleNext}
            handleLast={handleLast}
            datas={[]}
            page={0}
          />
        </Container>
      </Section>
    </Styled.compStyle>
  );
};
