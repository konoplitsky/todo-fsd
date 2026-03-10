import { useMutation } from '@tanstack/react-query';

import type { UseMutationOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants';
import { todosApi } from '@/entities/todos/api/requests.ts';

export const usePostCreateTodoMutation = (
  options?: UseMutationOptions<Todo, unknown, Omit<Todo, 'id' | 'checked'>>
) =>
  useMutation({
    mutationKey: [QUERY_KEYS.CREATED_TODOS],
    mutationFn: (todoFields: Omit<Todo, 'id' | 'checked'>) => todosApi.createTodo(todoFields),
    ...options
  });
