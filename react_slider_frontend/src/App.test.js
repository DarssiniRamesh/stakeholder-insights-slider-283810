import { render, screen } from '@testing-library/react';
import App from './App';

test('renders slider heading', () => {
  render(<App />);
  // Match the exact heading text used in StakeholderSliderPage
  const heading = screen.getByText(/Key Stakeholders in Flood Relief/i);
  expect(heading).toBeInTheDocument();
});
