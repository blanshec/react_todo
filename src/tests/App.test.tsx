import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders greeting', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to Most Boring of Apps/i);
  expect(linkElement).toBeInTheDocument();
});
