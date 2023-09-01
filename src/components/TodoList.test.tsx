import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

describe('render header columns', () => {
  test.each(['Task', 'Description', 'Timestamp'])(
    'should render header',
    (label) => {
      render(<TodoList todoItemList={[]} setTodoItemList={vi.fn} />);
      const result = screen.getByText(label);
      expect(result).toBeInTheDocument();
    }
  );
});

test('should render todo items', () => {
  render(
    <TodoList
      todoItemList={[new TodoItem(1, 'Name', 'Description')]}
      setTodoItemList={vi.fn}
    />
  );
  expect(screen.getByLabelText('todo list')).toBeInTheDocument();
});
