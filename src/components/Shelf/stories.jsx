import { Shelf } from '.';

export default {
  title: 'Shelf',
  component: Shelf,
  args: {
    id: 1,
    count: 30,
    speciesList: 'copaíba, guarantã'
  },
  argTypes: {
    id: { type: 'number' },
    count: { type: 'number' },
    speciesList: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Shelf {...args} />
    </div>
  );
};
