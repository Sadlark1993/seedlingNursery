import { CardContainer } from '.';
import { Container } from '../Container';
import cardsMock from './cardsMock';
import { Section } from '../Section';

export default {
  title: 'CardContainer',
  component: CardContainer,
  args: {
    cards: cardsMock
  },
  argTypes: {
    children: { type: 'array' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Section background={true}>
        <Container>
          <CardContainer {...args} />
        </Container>
      </Section>
    </div>
  );
};
