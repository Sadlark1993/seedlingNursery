import { SpeciesRegisterForm } from '.';
import { Section } from '../Section';

export default {
  title: 'SpeciesRegisterForm',
  component: SpeciesRegisterForm,
  args: {
    srcImg: './img/mock/Specie.png',
    name: 'Jatobá do Serrado',
    scienName: 'Hymenaea Stilbocarpa',
    description:
      'A espécie de jatobá encontrada no cerrado é a de nome científico Hymenaea Stilbocarpa, da família Leguminosae. Também conhecida como jatobá-do-campo, jatobá-da-serra, jatobá-de-casca-fina e jutaí, a árvore pode alcançar até 9 metros de altura. O nome jatobá vem do guarani e significa “árvore de fruto duro”. Em outras regiões do Brasil podem ser encontradas outras espécies de jatobá.'
  },
  argTypes: {
    srcImg: { type: 'string' },
    name: { type: 'string' },
    scienName: { type: 'string' },
    description: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Section background={false}>
        <SpeciesRegisterForm {...args} />
      </Section>
    </div>
  );
};
