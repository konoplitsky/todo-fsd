import '@mantine/core/styles.css';
import { TodoCard } from '@/entities/todos';
import type { Meta } from '@storybook/react-vite';

const meta = {
  title: 'UI/TodoCard',
  component: TodoCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TodoCard>;

export default meta;

export const Card = {
  args: {
    todo: {
      id: 1,
      name: 'Покормить собаку ',
      description: 'Вечером в 18:00',
      checked: false
    }
  }
};
