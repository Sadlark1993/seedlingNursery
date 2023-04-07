import { InputFText } from '.';

export default {
  title: 'InputFText',
  component: InputFText,
  args: {
    fieldW: 40
  },
  argTypes: {
    fieldW: { type: 'number' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <InputFText {...args} />
    </div>
  );
};
