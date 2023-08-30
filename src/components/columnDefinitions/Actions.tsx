import { Delete, Edit } from '@mui/icons-material';
import { GridColDef } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';

const Actions: GridColDef = {
  field: 'actions',
  headerName: 'Actions',
  editable: false,
  renderCell: (params) => (
    <>
      <IconButton aria-label="edit">
        <Edit />
      </IconButton>
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
    </>
  ),
  flex: 0.5,
};

export default Actions;
