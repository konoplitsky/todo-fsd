import { Stack, Box } from '@mantine/core';
import { useEffect } from 'react';

import { TodoCard } from '@/entities/todos';
import { useTodos, useTodosActions } from '@/entities/todos/model';
import { useGetTodosQuery } from '@/entities/todos/api';
import { useToggleTodo } from '../model/useToggleTodo';

export const ToggleTodo = () => {
  const getTodos = useGetTodosQuery();
  const { handleChecked, handleDelete } = useToggleTodo();

  const { setTodos } = useTodosActions();
  const todos = useTodos();

  useEffect(() => {
    if (getTodos.data) {
      setTodos(getTodos.data);
    }
  }, [getTodos.data]);

  return (
    <Box w='100%' style={{ maxWidth: 700, margin: '0 auto' }}>
      <Stack gap='sm'>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onChecked={() => handleChecked(todo)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </Stack>
    </Box>
  );
};
