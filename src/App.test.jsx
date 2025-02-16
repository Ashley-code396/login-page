// src/App.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


test('render email label', () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const emailElement = getByLabelText(/Email/i);
  expect(emailElement).toBeInTheDocument();
});
