import React from 'react';
import { render } from '@testing-library/react';
 
import Dashboard from '../components/Dashboard';
 
describe('App', () => {
  test('renders App component', () => {
    render(<Dashboard />);
  });
});