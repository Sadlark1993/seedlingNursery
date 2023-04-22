import { Shelve } from '.';

export default {
  title: 'Shelve',
  component: Shelve,
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
      <Shelve {...args} />
    </div>
  );
};
