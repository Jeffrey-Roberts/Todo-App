import React, { FC, useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';

const TodoIndex: FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const [itemNameValue, setItemNameValue] = useState('');
  const [itemDescValue, setItemDescValue] = useState('');
  const handleAddItem = (todoItem: TodoItem) => {
    if (itemNameValue) {
      setTodoList((prevState) => [...prevState, todoItem]);
      setItemNameValue('');
      setItemDescValue('');
    }
  };

  return (
    <Container aria-label="todo form">
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
        <Grid item xs={12}>
          <TextField
            value={itemNameValue}
            id="name"
            label="Name"
            error={!itemNameValue}
            size="medium"
            onChange={(e) => setItemNameValue(e.target.value)}
            required
            fullWidth
            autoFocus
            inputProps={{
              'aria-label': 'item name field',
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={itemDescValue}
            id="description"
            label="Description"
            aria-label="item description"
            onChange={(e) => setItemDescValue(e.target.value)}
            multiline
            rows={4}
            fullWidth
            inputProps={{
              'aria-label': 'item description field',
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <AddTodoItem
            name={itemNameValue}
            description={itemDescValue}
            handleAddItem={handleAddItem}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="error" fullWidth>
            Clear
          </Button>
        </Grid>
      </Grid>
      <TodoList todoItemList={todoList} />
    </Container>
  );
};

export default TodoIndex;
