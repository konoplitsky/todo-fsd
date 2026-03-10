import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants';
import { todosApi } from '@/entities/todos/api/requests.ts';

export const useDeleteTodoMutation = (options?: UseMutationOptions<Todo, unknown, Todo['id']>) =>
  useMutation({
    mutationKey: [QUERY_KEYS.DELETE_TODOS],
    mutationFn: (id: Todo['id']) => todosApi.deleteTodo(id),
    ...options
  });
