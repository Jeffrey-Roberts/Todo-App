import { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { DragIndicator } from '@mui/icons-material';
import TodoItem from './TodoItem';

export type ItemCardProps = {
  Item: TodoItem;
};
const ItemCard: FC<ItemCardProps> = ({ Item }) => {
  return (
    <Card sx={{ display: 'flex', marginY: '2px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <DragIndicator
          fontSize="large"
          sx={{ margin: 'auto', opacity: '10%' }}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {Item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ whiteSpace: 'pre-wrap' }}
          >
            {Item.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCard;
