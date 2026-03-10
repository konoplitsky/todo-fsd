import { Stack, Box } from '@mantine/core';
import { useEffect } from 'react';

import { TodoCard } from '@/entities/todos';
import { useTodos, useTodosActions } from '@/entities/todos/model';
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  usePutCheckedTodoMutation
} from '@/entities/todos/api';

export const ToggleTodo = () => {
  const getTodos = useGetTodosQuery();
  const deleteTodo = useDeleteTodoMutation();
  const checkedTodo = usePutCheckedTodoMutation();

  const { onDeleteTodo, onCheckedTodo, setTodos } = useTodosActions();
  const todos = useTodos();

  useEffect(() => {
    if (getTodos.data) {
      setTodos(getTodos.data);
    }
  }, [getTodos.data]);

  const handleChecked = (todo: Todo) => async () => {
    await checkedTodo.mutateAsync(todo);
    onCheckedTodo(todo);
  };

  const handleDelete = (id: number) => async () => {
    await deleteTodo.mutateAsync(id);
    onDeleteTodo(id);
  };

  return (
    <Box w='100%' style={{ maxWidth: 700, margin: '0 auto' }}>
      <Stack gap='sm'>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onChecked={handleChecked(todo)}
            onDelete={handleDelete(todo.id)}
          />
        ))}
      </Stack>
    </Box>
  );
};
