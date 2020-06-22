import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { StaticRouter } from 'react-router';

test('renders learn react link', () => {
  const { getByText } = render(<StaticRouter><App /></StaticRouter>);
  const titleElement = getByText(/Home page/i);
  expect(titleElement).toBeInTheDocument();
});
