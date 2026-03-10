export interface Todo {
  id: number;
  name: string;
  description: string;
  checked: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export interface TodosActions {
  addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckedTodo: (id: Todo['id']) => void;
}

export interface TodosStore extends TodosState {
  actions: TodosActions;
}
