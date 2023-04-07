import { WelcomeTitle } from '.';

export default {
  title: 'WelcomeTitle',
  component: WelcomeTitle,
  args: {
    children: 'Bem Vindo!'
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <WelcomeTitle {...args} />
    </div>
  );
};
