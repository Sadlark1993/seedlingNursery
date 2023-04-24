import { PlantsByShelf } from '.';
import datasMock from './datasMock';
import { Section } from '../Section';

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

export default {
  title: 'PlantsByShelf',
  component: PlantsByShelf,
  args: {
    datas: datasMock,
    handleFirst: handleFirst,
    handleBack: handleBack,
    handleNext: handleNext,
    handleLast: handleLast,
    page: 1
  },
  argTypes: {
    children: { type: 'array' }
  }
};

export const Template = (args) => {
  return (
    <Section background={true}>
      <PlantsByShelf {...args} />
    </Section>
  );
};
