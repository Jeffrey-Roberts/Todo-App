import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

test('should render todo items', () => {
  render(<TodoList todoItemList={[new TodoItem('Name', 'Description')]} />);
  expect(screen.getByLabelText('todo list')).toBeInTheDocument();
});
