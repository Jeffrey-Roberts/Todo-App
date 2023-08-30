import { GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const Description: GridColDef = {
  field: 'description',
  headerName: 'Description',
  flex: 2,
  renderCell: (params) => (
    <Typography sx={{ whiteSpace: 'pre-wrap' }}>{params.value}</Typography>
  ),
};

export default Description;
