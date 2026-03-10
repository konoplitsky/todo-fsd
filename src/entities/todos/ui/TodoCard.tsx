import { Card, Checkbox, Group, Text, Button } from '@mantine/core';
import type { Todo } from '../model/types';
import { memo } from 'react';

interface TodoCardProps {
  todo: Todo;
  onChecked: () => void;
  onDelete: () => void;
}

export const TodoCard = memo(({ todo, onChecked, onDelete }: TodoCardProps) => (
  <Card
    shadow='sm'
    withBorder
    p='md'
    style={{ width: '100%', minWidth: 280, maxWidth: 700, margin: '0 auto' }}
  >
    <Group justify='space-between' align='center' wrap='nowrap'>
      <Group gap='sm' align='center' wrap='nowrap' style={{ flex: 1 }}>
        <Checkbox checked={todo.checked} onChange={onChecked} />
        <div style={{ flex: 1 }}>
          <Text
            fw={500}
            style={{
              textDecoration: todo.checked ? 'line-through' : 'none',
              wordBreak: 'break-word',
              fontWeight: 700,
              fontSize: 20,
              marginBottom: 4
            }}
          >
            {todo.name}
          </Text>
          <Text size='sm' c='dimmed' style={{ wordBreak: 'break-word', fontSize: 16 }}>
            {todo.description}
          </Text>
        </div>
      </Group>
      <Button
        color='red'
        variant='light'
        size='xs'
        onClick={onDelete}
        style={{ minWidth: 80, background: '#ffeaea' }}
      >
        Удалить
      </Button>
    </Group>
  </Card>
));
