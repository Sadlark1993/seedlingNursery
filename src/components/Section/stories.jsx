import { Section } from '.';
import { Container } from '../Container';

export default {
  title: 'Section',
  component: Section,
  args: {
    background: true,
    children: (
      <Container>
        <div>
          <h1>Section</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for lorem ipsum will uncover many web sites still in their infancy.
          </p>
        </div>
      </Container>
    )
  },
  argTypes: {
    children: { type: '' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <Section {...args} />
    </div>
  );
};
