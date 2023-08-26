import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import TodoIndex from './TodoIndex';

test('should render form control', () => {
  render(<TodoIndex />);
  expect(screen.getByLabelText('todo form')).toBeInTheDocument();
});

test('should add todo item', async () => {
  const user = userEvent.setup();

  const itemName = 'Todo Name';
  const itemDesc = 'Todo desc';
  const itemTimestamp = new Date('January 2, 2002');

  vi.setSystemTime(itemTimestamp);

  render(<TodoIndex />);
  await user.type(screen.getByLabelText('item name field'), itemName);
  await user.type(screen.getByLabelText('item description field'), itemDesc);
  await user.click(screen.getByLabelText('add button'));
  expect(screen.getByText(itemName)).toBeInTheDocument();
  expect(screen.getByText(itemDesc)).toBeInTheDocument();
});

test('should not add todo item if name field not filled', async () => {
  const user = userEvent.setup();
  const itemName = 'Todo Name';

  render(<TodoIndex />);

  await user.click(screen.getByLabelText('add button'));
  expect(screen.queryByText(itemName)).not.toBeInTheDocument();
});
