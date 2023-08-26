import React, { FC } from 'react';
import { Button } from '@mui/material';
import TodoItem from './TodoItem';

export type AddTodoItemProps = {
  name: string;
  description: string;
  handleAddItem: (_: TodoItem) => void;
};

const AddTodoItem: FC<AddTodoItemProps> = ({
  name,
  description,
  handleAddItem,
}) => {
  return (
    <Button
      onClick={() => handleAddItem(new TodoItem(name, description))}
      aria-label="add button"
      variant="contained"
      fullWidth
    >
      Add
    </Button>
  );
};

export default AddTodoItem;
