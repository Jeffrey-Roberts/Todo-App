import { FC } from 'react';
import { Box } from '@mui/material';
import TodoItem from './TodoItem';

export type TodoListProps = {
  todoItemList: TodoItem[];
};

const TodoList: FC<TodoListProps> = ({ todoItemList }) => {
  return (
    <Box
      aria-label="todo list"
      sx={{ paddingLeft: '16px', paddingTop: '16px' }}
    >
      {todoItemList.map((item) => (
        <div key={item.timestamp.toString()}>{`${item.name} | ${
          item.description
        } | ${item.timestamp.toLocaleString()}`}</div>
      ))}
    </Box>
  );
};

export default TodoList;
