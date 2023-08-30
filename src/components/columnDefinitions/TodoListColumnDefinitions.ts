import { GridColDef } from '@mui/x-data-grid';
import Name from './Name';
import Description from './Description';
import Timestamp from './Timestamp';
import Actions from './Actions';

const todoListColumnDefinitions: GridColDef[] = [
  Name,
  Description,
  Timestamp,
  Actions,
];

export default todoListColumnDefinitions;
