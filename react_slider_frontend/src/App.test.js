import { render, screen } from '@testing-library/react';
import App from './App';

test('renders slider heading', () => {
  render(<App />);
  const heading = screen.getByText(/Flood Relief Stakeholders/i);
  expect(heading).toBeInTheDocument();
});
