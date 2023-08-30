import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

describe('render header columns', () => {
  test.each(['Task', 'Description', 'Timestamp'])(
    'should render header',
    (label) => {
      render(<TodoList todoItemList={[]} />);
      const result = screen.getByText(label);
      expect(result).toBeInTheDocument();
    }
  );
});

test('should render todo items', () => {
  render(<TodoList todoItemList={[new TodoItem('Name', 'Description')]} />);
  expect(screen.getByLabelText('todo list')).toBeInTheDocument();
});
