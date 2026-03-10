import { Stack, Box } from '@mantine/core';
import { TodoCard } from '../../../entities/todos';
import { useTodos, useTodosActions } from '../../../entities/todos/model';

export const ToggleTodo = () => {
  const todos = useTodos();
  const { onDeleteTodo, onCheckedTodo } = useTodosActions();

  return (
    <Box w='100%' style={{ maxWidth: 700, margin: '0 auto' }}>
      <Stack gap='sm'>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onChecked={() => onCheckedTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </Stack>
    </Box>
  );
};
