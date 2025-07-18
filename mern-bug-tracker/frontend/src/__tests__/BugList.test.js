import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

test('renders empty bug list message', () => {
  render(<BugList bugs={[]} onUpdate={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/No bugs reported/i)).toBeInTheDocument();
});
