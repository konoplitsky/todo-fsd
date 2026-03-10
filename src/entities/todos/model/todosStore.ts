import { create } from 'zustand/react';
import { immer } from 'zustand/middleware/immer';
import type { Todo, TodosState, TodosStore } from './types.ts';
import { DEFAULT_TODOS } from '../../../mock.ts';
import { persist } from 'zustand/middleware';
import type { PersistOptions } from 'zustand/middleware';

const defaultTodos: TodosState = {
  todos: DEFAULT_TODOS
};

const persistOptions: PersistOptions<TodosStore, Omit<TodosStore, 'actions'>> = {
  name: 'todos-storage',
  partialize: (state) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { actions: _, ...rest } = state;
    return rest;
  }
};

export const useTodosStore = create<TodosStore>()(
  persist(
    immer((set) => ({
      ...defaultTodos,

      actions: {
        addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
          set((state) => {
            state.todos.push({
              id: state.todos.length + 1,
              name,
              description,
              checked: false
            });
          });
        },

        onDeleteTodo: (id: Todo['id']) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
          });
        },

        onCheckedTodo: (id: Todo['id']) => {
          set((state) => {
            state.todos.forEach((todo) => {
              if (todo.id === id) {
                todo.checked = !todo.checked;
              }
            });
          });
        }
      }
    })),
    persistOptions
  )
);
