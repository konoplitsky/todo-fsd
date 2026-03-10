import { Card, Container, Stack } from '@mantine/core';
import { AddTodo } from '../../features/addTodo/ui/AddTodo.tsx';
import { ToggleTodo } from '../../features/toggleTodo/ui/ToggleTodo.tsx';

export const TodosPage = () => {
  return (
    <Container size={700} py={40}>
      <Card shadow='sm' withBorder p={32} style={{ minHeight: 400 }}>
        <Stack gap={32}>
          <AddTodo />
          <ToggleTodo />
        </Stack>
      </Card>
    </Container>
  );
};
