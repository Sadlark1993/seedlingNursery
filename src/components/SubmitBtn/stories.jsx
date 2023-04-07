import { SubmitBtn } from '.';

export default {
  title: 'SubmitBtn',
  component: SubmitBtn,
  args: {
    children: 'Login'
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SubmitBtn {...args} />
    </div>
  );
};
