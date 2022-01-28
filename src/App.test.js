import { render, screen } from '@testing-library/react';
import CardApp from './CardApp';

test('renders learn react link', () => {
  render(<CardApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
