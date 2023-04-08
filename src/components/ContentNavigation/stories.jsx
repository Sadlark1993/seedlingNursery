import { ContentNavigation } from '.';

const handleLast = () => {
  console.log('last');
};

const handleBack = () => {
  console.log('back');
};

const handleNext = () => {
  console.log('next');
};

const handleFirst = () => {
  console.log('first');
};

export default {
  title: 'ContentNavigation',
  component: ContentNavigation,
  args: {
    handleFirst: handleFirst,
    handleBack: handleBack,
    handleNext: handleNext,
    handleLast: handleLast,
    page: 0
  }
};

export const Template = (args) => {
  return (
    <div>
      <ContentNavigation {...args} />
    </div>
  );
};
