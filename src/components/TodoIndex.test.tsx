import { render, screen } from '@testing-library/react';
import TodoIndex from './TodoIndex';

test('should render form control', () => {
  render(<TodoIndex />);
  expect(screen.getByLabelText('todo form')).toBeInTheDocument();
});
