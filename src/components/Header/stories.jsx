import { Header } from '.';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { NavLink } from '../NavLink';
import LinksMock from './LinksMock';

const img = {
  src: './img/icons/ifmt.svg',
  alt: 'IFMT'
};

export default {
  title: 'Header',
  component: Header,
  args: {
    children: [<Logo key="logo" img={img} />, <Navigation key="navigation" links={LinksMock} />]
  },
  argTypes: {
    children: { type: 'array' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
