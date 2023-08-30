import { FC } from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import TodoItem from './TodoItem';
import TodoListColumnDefinitions from './columnDefinitions/TodoListColumnDefinitions';

export type TodoListProps = {
  todoItemList: TodoItem[];
};

const TodoList: FC<TodoListProps> = ({ todoItemList }) => {
  return (
    <DataGrid
      aria-label="todo list"
      autoHeight
      disableRowSelectionOnClick
      columns={TodoListColumnDefinitions}
      rows={todoItemList}
      getRowId={(row) => row.name + row.description + row.timestamp}
      getRowHeight={() => 'auto'}
      sx={{
        m: 'auto',
        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
          py: '22px',
        },
        [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
          outline: 'transparent',
        },
        [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]:
          {
            outline: 'none',
          },
      }}
    />
  );
};

export default TodoList;
