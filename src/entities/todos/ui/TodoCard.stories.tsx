import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { TodoCard } from '@/entities/todos';

const todo = {
  id: 1,
  name: '23232323 ',
  description: '32323',
  checked: false
};

const meta = {
  title: 'Example/Button',
  component: TodoCard,
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { todo }
};

export default meta;

export const Card = {
  args: {
    id: 1,
    name: '23232323 ',
    description: '32323',
    checked: false
  }
};
