import React, { FC } from 'react';
import { Button } from '@mui/material';
import TodoItem from './TodoItem';

export type AddTodoItemProps = {
  id: number;
  name: string;
  description: string;
  handleAddItem: (_: TodoItem) => void;
};

const AddTodoItem: FC<AddTodoItemProps> = ({
  id,
  name,
  description,
  handleAddItem,
}) => {
  return (
    <Button
      onClick={() => handleAddItem(new TodoItem(id, name, description))}
      aria-label="add button"
      variant="contained"
      fullWidth
    >
      Add
    </Button>
  );
};

export default AddTodoItem;
