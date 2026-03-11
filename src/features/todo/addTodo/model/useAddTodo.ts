import { usePostCreateTodoMutation } from '@/entities/todos/api/hooks';
import { useTodosActions } from '@/entities/todos/model';

interface UseAddTodoProps {
  onAddTodo: (todo: Omit<Todo, 'id' | 'checked'>) => Promise<void>;
}

export const useAddTodo = (): UseAddTodoProps => {
  const createTodo = usePostCreateTodoMutation();
  const { addTodo } = useTodosActions();

  const onAddTodo = async (todo: Omit<Todo, 'id' | 'checked'>) => {
    const result = await createTodo.mutateAsync(todo);
    addTodo(result);
  };

  return { onAddTodo };
};
