import { InputFText } from '.';

export default {
  title: 'InputFText',
  component: InputFText,
  args: {
    fieldW: 40,
    visible: true
  },
  argTypes: {
    fieldW: { type: 'number' },
    visible: { type: 'boolean' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <InputFText {...args} />
    </div>
  );
};
