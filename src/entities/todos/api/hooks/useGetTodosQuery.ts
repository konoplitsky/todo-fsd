import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants';

import { todosApi } from '../requests.ts';

export const useGetTodosQuery = (options?: UseQueryOptions<Todo[]>) =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_TODOS],
    queryFn: () => todosApi.getTodos(),
    ...options
  });
