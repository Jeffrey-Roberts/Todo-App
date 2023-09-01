import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import {
  DataGrid,
  GridActionsCellItem,
  gridClasses,
  GridColDef,
  GridRowId,
} from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import TodoItem from './TodoItem';
import TodoListColumnDefinitions from './columnDefinitions/TodoListColumnDefinitions';

export type TodoListProps = {
  todoItemList: TodoItem[];
  setTodoItemList: Dispatch<SetStateAction<TodoItem[]>>;
};

const TodoList: FC<TodoListProps> = ({ todoItemList, setTodoItemList }) => {
  const handleDeleteAction = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setTodoItemList((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [setTodoItemList]
  );

  const Actions: GridColDef = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    editable: false,
    getActions: (params) => [
      <GridActionsCellItem key="edit" icon={<Edit />} label="Edit button" />,
      <GridActionsCellItem
        key="delete"
        icon={<Delete />}
        label="Delete button"
        onClick={handleDeleteAction(params.id)}
      />,
    ],
    flex: 0.5,
  };

  return (
    <DataGrid
      aria-label="todo list"
      autoHeight
      disableRowSelectionOnClick
      columns={[...TodoListColumnDefinitions, Actions]}
      rows={todoItemList}
      getRowId={(row) => row.id}
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
