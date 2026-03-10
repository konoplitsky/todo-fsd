import type { TodosStore } from './types.ts';

export const todosSelector = (state: TodosStore) => state.todos;

export const todosActionsSelector = (state: TodosStore) => state.actions;
