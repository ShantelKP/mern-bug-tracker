import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders BugForm and submits with valid input', () => {
  const handleSubmit = jest.fn();
  render(<BugForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'Bug title' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Bug description' } });
  fireEvent.click(screen.getByText(/Report Bug/i));

  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Bug title', description: 'Bug description' });
});
