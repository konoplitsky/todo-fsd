import { delay, http, HttpResponse } from 'msw';

type CreateTodoBody = { name: string; description: string };
type PatchTodoBody = { id: number; checked: boolean };

const TODOS_MOCK = [
  { id: 1, name: 'name 1', description: 'description 1', checked: false },
  { id: 2, name: 'name 2', description: 'description 2', checked: false },
  { id: 3, name: 'name 3', description: 'description 3', checked: false }
];

export const handlers = [
  http.get('/api/todos', async () => {
    await delay(2000);

    return HttpResponse.json(TODOS_MOCK);
  }),

  http.post('/api/todo', async ({ request }) => {
    const body = (await request.json()) as CreateTodoBody;
    const newTodo = { id: Date.now(), ...body, checked: false };

    TODOS_MOCK.push(newTodo);

    return HttpResponse.json(newTodo);
  }),

  http.delete('/api/todo/:id', async ({ params }) => {
    const id = Number(params.id);
    const index = TODOS_MOCK.findIndex((todo) => todo.id === id);

    if (index !== -1) TODOS_MOCK.splice(index, 1);

    return HttpResponse.json({ message: 'Deleted todo' });
  }),

  http.patch('/api/todo', async ({ request }) => {
    const body = (await request.json()) as PatchTodoBody;
    const index = TODOS_MOCK.findIndex((todo) => todo.id === body.id);

    if (index === -1) return HttpResponse.json({ message: 'Todo not found' }, { status: 404 });
    TODOS_MOCK[index]!.checked = body.checked;

    console.log('@@@updateTodo', TODOS_MOCK);

    return HttpResponse.json(TODOS_MOCK[index]);
  })
];
