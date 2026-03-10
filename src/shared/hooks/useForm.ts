import { type ChangeEvent, useState } from 'react';

interface UseFormProps<T> {
  initialValue: T;
}

export const useForm = <T>({ initialValue }: UseFormProps<T>) => {
  const [field, setField] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setField({
      ...field,
      [name]: value
    });
  };

  return {
    field,
    setField,
    onChange
  };
};
