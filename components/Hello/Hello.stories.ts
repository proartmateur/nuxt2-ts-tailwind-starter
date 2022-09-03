import { Meta, StoryFn } from '@storybook/vue';
import Hello from './Hello.vue';

export default {
  title: 'Hello',
  component: Hello,
  parameters: {
    backgrounds: {
      values: [
        { name: 'Black', value: '#111' },
        { name: 'Gray', value: '#777' },
        { name: 'White', value: '#FFF' },
      ],
    },
  },
} as Meta<Hello>;
export interface ArgTypes {
  args: any;
  components: any;
  props: any;
  template: any;
}

const Template = (args: any, { argTypes }): ArgTypes => ({
  components: { Hello },
  props: Object.keys(argTypes),
  template: '<Hello v-bind="$props" />',
  args,
});

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { title: 'Button' };
