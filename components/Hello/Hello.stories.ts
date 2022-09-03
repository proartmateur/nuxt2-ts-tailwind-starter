import { Meta, StoryFn } from '@storybook/vue';
import Hello from './Hello.vue';

export default {
  title: 'Hello',
  component: Hello,
} as Meta<Hello>;

const Template = (args, { argTypes }) => ({
  components: { Hello },
  props: Object.keys(argTypes),
  template: '<Hello v-bind="$props" />',
});

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { title: 'Button' };
