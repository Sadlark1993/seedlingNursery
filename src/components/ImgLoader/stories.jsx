import { ImgLoader } from '.';

export default {
  title: 'ImgLoader',
  component: ImgLoader,
  args: {
    srcImg: './img/mock/noPhoto.png',
    altImg: 'As árvores somos nozes'
  }
};

export const Template = (args) => {
  return (
    <div>
      <ImgLoader {...args} />
    </div>
  );
};
