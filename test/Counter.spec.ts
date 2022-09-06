import { render, screen, fireEvent } from '@testing-library/vue';
import Counter from '@/components/Counter.vue';

test('increments value on click', async () => {
  render(Counter);
  expect(screen.queryByText('Times clicked: 0')).toBeTruthy();

  const button = screen.getByText('increment');
  await fireEvent.click(button);
  await fireEvent.click(button);
  const textExpected = screen.queryByText('Times clicked: 2');
  expect(textExpected).toBeTruthy();
});

/*import { shallowMount, mount } from '@vue/test-utils'
//import HelloWorld from '../HelloWorld.vue'
import Counter from '@/components/Counter.vue';

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', async() => {
   const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
  })
})
*/
