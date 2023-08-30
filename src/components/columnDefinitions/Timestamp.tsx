import { GridColDef } from '@mui/x-data-grid';

const Timestamp: GridColDef = {
  field: 'timestamp',
  headerName: 'Timestamp',
  flex: 1,
  valueGetter: ({ value }) => value && new Date(value),
  valueFormatter: ({ value }) => value.toLocaleString(),
};

export default Timestamp;
