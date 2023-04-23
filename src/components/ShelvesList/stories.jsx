import { ShelvesList } from '.';
import mock from './shelvesMock';
import { Container } from '../Container';
import { Section } from '../Section';

export default {
  title: 'ShelvesList',
  component: ShelvesList,
  args: {
    shelvesList: mock
  }
};

export const Template = (args) => {
  return (
    <Section background={true}>
      <Container>
        <ShelvesList {...args} />
      </Container>
    </Section>
  );
};
