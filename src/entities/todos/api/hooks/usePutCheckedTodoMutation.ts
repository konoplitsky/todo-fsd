import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants';
import { todosApi } from '@/entities/todos/api/requests.ts';

export const usePutCheckedTodoMutation = (options?: UseMutationOptions<Todo, unknown, Todo>) =>
  useMutation({
    mutationKey: [QUERY_KEYS.CHECKED_TODOS],
    mutationFn: (todo: Todo) => todosApi.checkedTodo(todo),
    ...options
  });
