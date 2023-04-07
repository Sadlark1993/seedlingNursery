import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children:
      'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso\nAvenida Sen. Filinto Müller, 953 Bairro: Quilombo - CEP: 78043-409\nTelefone: (65) 3616-4100\nCuiabá/MT'
  },
  argTypes: {
    children: { type: 'node' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
