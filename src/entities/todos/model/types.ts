export interface TodosState {
  todos: Todo[];
}

export interface TodosActions {
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckedTodo: (todo: Todo) => void;
}

export interface TodosStore extends TodosState {
  actions: TodosActions;
}
