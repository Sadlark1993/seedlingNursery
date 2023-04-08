import { PageTitle } from '.';

export default {
  title: 'PageTitle',
  component: PageTitle,
  args: {
    children: 'Espécies Cadastradas'
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <PageTitle {...args} />
    </div>
  );
};
