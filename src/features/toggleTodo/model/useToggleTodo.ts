import { useDeleteTodoMutation, usePutCheckedTodoMutation } from '@/entities/todos/api';
import { useTodosActions } from '@/entities/todos/model';

interface ToggleTodoReturn {
  handleChecked: (todo: Todo) => Promise<void>;
  handleDelete: (id: Todo['id']) => Promise<void>;
}

export const useToggleTodo = (): ToggleTodoReturn => {
  const deleteTodo = useDeleteTodoMutation();
  const checkedTodo = usePutCheckedTodoMutation();

  const { onDeleteTodo, onCheckedTodo } = useTodosActions();

  const handleChecked = async (todo: Todo) => {
    await checkedTodo.mutateAsync(todo);
    onCheckedTodo(todo);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo.mutateAsync(id);
    onDeleteTodo(id);
  };

  return {
    handleChecked,
    handleDelete
  };
};
