import { GridColDef } from '@mui/x-data-grid';
import Name from './Name';
import Description from './Description';
import Timestamp from './Timestamp';

const todoListColumnDefinitions: GridColDef[] = [Name, Description, Timestamp];

export default todoListColumnDefinitions;
