export const todosApi = {
  getTodos: async () => {
    const res = await fetch('/api/todos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    return data;
  },

  createTodo: async (todoFields: Omit<Todo, 'id' | 'checked'>) => {
    const res = await fetch('/api/todo', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(todoFields)
    });

    const data = await res.json();
    return data;
  },

  deleteTodo: async (id: number) => {
    const res = await fetch(`/api/todo/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE'
    });

    const data = res.json();
    return data;
  },

  checkedTodo: async (todo: Todo) => {
    const res = await fetch(`/api/todo`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify({ id: todo.id, checked: !todo.checked })
    });

    const data = res.json();
    return data;
  }
};
