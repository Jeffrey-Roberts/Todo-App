import { FC } from 'react';
import { Box } from '@mui/material';
import TodoItem from './TodoItem';
import ItemCard from './ItemCard';

export type TodoListProps = {
  todoItemList: TodoItem[];
};

const TodoList: FC<TodoListProps> = ({ todoItemList }) => {
  return (
    <Box
      aria-label="todo list"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '16px',
        paddingTop: '16px',
      }}
    >
      {todoItemList.map((item) => (
        <ItemCard key={item.timestamp.toString()} Item={item} />
      ))}
    </Box>
  );
};

export default TodoList;
