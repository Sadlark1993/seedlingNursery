import { FertilizationRecord } from '.';
import { Section } from '../Section';
import { Container } from '../Container';

const record = [
  {
    type: 'adubo mineral',
    quant: 10,
    date: '2022-11-25'
  },
  {
    type: 'adubo mineral',
    quant: 7.5,
    date: '2021-09-11'
  },
  {
    type: 'bosta de vaca',
    quant: 8,
    date: '2023-02-12'
  }
];

export default {
  title: 'FertilizationRecord',
  component: FertilizationRecord,
  args: {
    records: record
  }
};

export const Template = (args) => {
  return (
    <div>
      <Section background={true}>
        <Container>
          <FertilizationRecord {...args} />
        </Container>
      </Section>
    </div>
  );
};
