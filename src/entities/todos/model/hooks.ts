import { useTodosStore } from './todosStore.ts';
import { todosSelector, todosActionsSelector } from './selectors.ts';

export const useTodos = () => useTodosStore(todosSelector);

export const useTodosActions = () => useTodosStore(todosActionsSelector);
