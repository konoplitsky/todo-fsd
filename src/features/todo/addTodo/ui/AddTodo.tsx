import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { Input, Button, Flex, Box } from '@mantine/core';
import { useAddTodo } from '@/features/todo/addTodo/model/useAddTodo.ts';

type CreateTodo = Omit<Todo, 'id' | 'checked'>;

const TODO: CreateTodo = {
  name: '',
  description: ''
};

export const AddTodo = () => {
  const [todo, setTodo] = useState<CreateTodo>(TODO);
  const { onAddTodo } = useAddTodo();

  const onClick = async () => {
    await onAddTodo(todo);
    setTodo(TODO);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box w='100%' style={{ maxWidth: 700, margin: '0 auto', marginBottom: 24 }}>
      <Flex gap={12} align='center' justify='center' wrap='wrap'>
        <Input
          placeholder='Название задачи'
          name='name'
          value={todo.name}
          onChange={onChange}
          style={{ minWidth: 180, flex: 1 }}
        />

        <Input
          placeholder='Описание'
          name='description'
          value={todo.description}
          onChange={onChange}
          style={{ minWidth: 180, flex: 2 }}
        />

        <Button onClick={onClick} style={{ minWidth: 160, height: 40 }}>
          Добавить задачу
        </Button>
      </Flex>
    </Box>
  );
};
