import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';

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
        </Container>
      </Section>
    </Styled.compStyle>
  );
};
