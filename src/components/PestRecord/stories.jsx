import { PestRecord } from '.';
import { Section } from '../Section';
import { Container } from '../Container';

const record = [
  {
    type: 'AIDS',
    date: '2022-11-25'
  },
  {
    type: 'gonorreia',
    date: '2021-09-11'
  },
  {
    type: 'herpes',
    date: '2023-02-12'
  }
];

export default {
  title: 'PestRecord',
  component: PestRecord,
  args: {
    records: record
  }
};

export const Template = (args) => {
  return (
    <div>
      <Section background={true}>
        <Container>
          <PestRecord {...args} />
        </Container>
      </Section>
    </div>
  );
};
