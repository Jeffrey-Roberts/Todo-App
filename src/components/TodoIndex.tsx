import { FC, useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const TodoIndex: FC = () => {
  const [itemNameValue, setItemNameValue] = useState('');

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Todo-App
      </Typography>
      <Grid
        sx={{ margin: 'auto' }}
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4} sx={{ height: '100%' }}>
          <TextField
            id="name"
            label="Name"
            aria-label="item name"
            error={!itemNameValue}
            size="medium"
            onChange={(e) => setItemNameValue(e.target.value)}
            required
            fullWidth
            InputProps={{
              style: {
                height: '100%',
              },
            }}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="description"
            label="Description"
            aria-label="item description"
            multiline
            rows={3}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" fullWidth>
            Add
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="error" fullWidth>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoIndex;
