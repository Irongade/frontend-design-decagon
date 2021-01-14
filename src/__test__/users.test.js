import React from 'react';
import { render } from '@testing-library/react';
 
import Users from '../components/Users';

const testFn = () => "Testing..."
 
describe('App', () => {
  test('renders Users component', () => {
    render(<Users searchedUsers={testFn} setSearchBy={testFn} setSearchField={testFn} isLoading={false} />);
  });
});