import React from 'react';
import { render } from '@testing-library/react';
 
import Dashboard from '../components/Dashboard';
 
describe('Dashboard', () => {
  test('renders Dashboard component', () => {
    render(<Dashboard />);
  });
});