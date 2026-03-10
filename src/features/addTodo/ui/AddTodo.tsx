import { Input, Button, Flex, Box } from '@mantine/core';
import { useTodosActions } from '../../../entities/todos/model';
import { type ChangeEvent, useState } from 'react';

const TODO = {
  name: '',
  description: ''
};

export const AddTodo = () => {
  const [todo, setTodo] = useState(TODO);
  const { addTodo } = useTodosActions();

  const onClick = () => {
    addTodo(todo);
    setTodo(TODO);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
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
