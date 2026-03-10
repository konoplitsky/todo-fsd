import { create } from 'zustand/react';
import { immer } from 'zustand/middleware/immer';
import type { TodosState, TodosStore } from './types.ts';
import { persist } from 'zustand/middleware';
import type { PersistOptions } from 'zustand/middleware';

const defaultTodos: TodosState = {
  todos: []
};

const persistOptions: PersistOptions<TodosStore, Omit<TodosStore, 'actions'>> = {
  name: 'todos-storage',
  partialize: (state) => {
    const { actions: _, ...rest } = state;
    return rest;
  }
};

export const useTodosStore = create<TodosStore>()(
  persist(
    immer((set) => ({
      ...defaultTodos,

      actions: {
        addTodo: (todo: Todo) => {
          set((state) => {
            state.todos.push(todo);
          });
        },

        setTodos: (todos: Todo[]) => {
          set((state) => {
            state.todos = todos;
          });
        },

        onDeleteTodo: (id: Todo['id']) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
          });
        },

        onCheckedTodo: (todoExternal) => {
          set((state) => {
            state.todos.forEach((todo) => {
              if (todo.id === todoExternal.id) {
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
